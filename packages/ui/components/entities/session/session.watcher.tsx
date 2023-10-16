'use client'
import { useCallback, useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useCookieState, useDebounceEffect, useLocalStorageState } from 'ahooks'
import { Session } from "@ui/types/index"
import { setSession } from './session'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithCustomToken } from 'firebase/auth'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { isEqual } from 'lodash'
import { usePathname, useSearchParams } from 'next/navigation'
import { uploadSession } from '@ui/helpers/session'
import { useToast } from '@ui/components/ui/use-toast'
import { generateSidToken, verifyToken } from '@ui/helpers/token'
import { host } from '@ui/const/host'
import { auth, db } from '@ui/utils/app'
import { Toaster } from '@ui/components/ui/toaster'
import { v4 } from 'uuid'
const SessionWatcher = () => {
  const path = usePathname()
  const [sid, setSID] = useLocalStorageState<string | null>( 'sid', { defaultValue: null } );
  const [uid, setUid] = useCookieState('uid');
  const [user, loading] = useAuthState(auth)
  const session = useAppSelector(state => state.watcher.session)
  const dispatch = useAppDispatch()
  const params = useSearchParams()
  const tokenParam = params.get('token')
  const handleUploadSession = useCallback(async() => await uploadSession(session), [session])
  const { toast } = useToast()
  const generateSession = async() => {
    const newSID = v4()
    const session: Session = {
      sid: newSID,
      disabled: false,
      uid: null,
      uids: []
    }
    const token = generateSidToken(session)
    if (token) {
      setSID(token)
      return session
    } else return null
  }
  const setLocalSession = async(sid: string) => {
    const extractedSession = await verifyToken(sid) as { sid: string } | null
    if (extractedSession) {
      const local_session: Session = { ...session, sid: extractedSession.sid }
      return local_session
    } else null
  }
  const getToken = async(uid: string) => {
    const fetchUrl = `${host}/users/token?userId=${uid}`
    try {
      const res = await fetch(fetchUrl)
      if (res.ok) {
        const token = await res.json()
        signInWithCustomToken(auth, token)
      }
    } catch(e) {

    }
  }
  const [debouncedSession, setDebouncedSession] = useState<Session | null>(null)
  useLayoutEffect(() => {
    process.env.NODE_ENV === 'development' && console.info(session.sid, session?.uid, user?.uid, sid)
  },[session, sid, user?.uid])
  const getCatchSession = (): Promise<Session | null> => new Promise(async(res, rej) => {
    if (sid) {
      const local_session = await setLocalSession(sid)
      if (local_session && local_session.sid) {
      const sessionRef = doc(db, 'sessions', local_session.sid)
        const db_session = await getDoc(sessionRef)
        if (db_session.exists()) {
          res(db_session.data() as Session)
        } else res(null)
      } else res(null)
    } else {
      const newSession = await generateSession()
      res(newSession)
    }
  })
  const manipulateSession = () => new Promise(async(res, ref) => {
    if (!loading && session.sid !== '') {
      if ((session.uid && user) && session.uid !== user.uid) {
        getToken(session.uid)
        toast({
          title: 'Пользователь обновлен'
        })
      }
      if (session.uid && !user) {
        getToken(session.uid)
      }
      if (!session.uid && user) {
        const sessionNoUser = {
          ...session,
          uid: null
        }
        dispatch(setSession(sessionNoUser))
        auth.signOut()
        setUid('')
      }
    }
  })
  useDebounceEffect(() => {
    if (!debouncedSession) {
        handleUploadSession()
        .finally(() => {
          setDebouncedSession(session)
        })
    } else {
      if (!isEqual(debouncedSession, session) && session.sid) {
        console.log('Session is need update')
        handleUploadSession()
        .finally(() => {
          setDebouncedSession(session)
        })
      } else console.log('Session is not need update')
    }

  }, [session, debouncedSession], { wait: 1000 })
  useLayoutEffect(() => {
    manipulateSession()
  }, [session.uid, user])
  useLayoutEffect(() => {
    getCatchSession()
    .then(session => {
      console.log(session)
      if (session) dispatch(setSession(session))
    })
  }, [session.sid, sid, tokenParam, path])
  useLayoutEffect(() => {
    if (session.sid) {
      const sessionRef = doc(db, 'sessions', session.sid)
      onSnapshot(sessionRef, sessionSnap => {
        process.env.NODE_ENV === 'development' && console.log('session update is coming')
        if (sessionSnap.exists() && !isEqual(sessionSnap.data() as Session, session)) {
          const session = sessionSnap.data() as Session
          dispatch(setSession(session))
          setDebouncedSession(session)
        } 
      })
    }
  },[session.sid])
    return (
      <Toaster />
    )
}

export default SessionWatcher