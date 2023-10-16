'use client'
import { auth, db } from '@ui/utils/app'
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { Session } from '@ui/types'
import { setSession } from '@ui/components/entities/session/session'
import SessionUser from './SessionUser'

const SessionPage = () => {
    const [user] = useAuthState(auth)
    const session = useAppSelector(state => state.watcher.session)
    const [otherSessions, setOtherSessions] = useState<Session[]>([])
    const dispatch = useAppDispatch()
    const fetchSessions = async() => {
        if (user) {
            const sessionsRef = collection(db, 'sessions')
            const q = query(sessionsRef, where('uids', 'array-contains', user.uid))
            const snaps = await getDocs(q)
            console.log(snaps)
            if (snaps.empty === false) {
                const sessions = snaps.docs.map(snap => snap.data() as Session)
                const excludeCurrent = sessions.filter(s => s.sid !== session.sid)
                setOtherSessions(excludeCurrent)
            }
        }
    }
    const removeUserFromCurrentSession = (uid: string) => {
        const updatedSession: Session = {
            ...session,
            uid: uid === session.uid ? null : session.uid,
            uids: session.uids.filter(sessionUid => sessionUid !== uid)
        }
        dispatch(setSession(updatedSession))
    }
    const removeFromRemoteSession = async(sid: string, uid: string) => {
        const sessionsRef = doc(db, 'sessions', sid)
        const snap = await getDoc(sessionsRef)
        if (snap.exists()) {
            const remoteSession = snap.data() as Session
            const updatedSession: Session = {
                ...remoteSession,
                uid: uid === remoteSession.uid ? null : remoteSession.uid,
                uids: remoteSession.uids.filter(sessionUid => sessionUid !== uid)
            }
            await updateDoc(sessionsRef, updatedSession)
        }
    }
    useEffect(() => {
        if (user) fetchSessions()
    },[user])
    return (
        <div className='flex flex-col w-full h-full gap-8'>
            <div className="flex flex-col w-full gap-4 p-4 h-fit rounded-xl bg-neutral-900">
                <h2 className='text-lg font-semibold text-neutral-200'>Текущая сессия</h2>
                <div className="flex flex-col w-full gap-4 h-fit">
                    {
                        session.uids.map(uid => <SessionUser key={uid + session.sid} onClick={() => removeUserFromCurrentSession(uid)} uid={uid} />)
                    }
                </div>
            </div>
            {
                otherSessions.length !== 0 &&
                <div className="flex flex-col w-full gap-4 h-fit">
                    <span className='text-lg font-semibold text-neutral-200'>Вы есть в других сессиях</span>
                    {
                        otherSessions.map(session => <div key={session.sid} className='flex flex-col w-full gap-2 p-4 h-fit'>
                            <div className="flex flex-col w-full gap-4 h-fit">
                                {
                                    session.uids.filter(uid => user ? user.uid === uid : false).map(uid => <SessionUser key={uid + session.sid} uid={uid} onClick={() => removeFromRemoteSession(session.sid, uid)} />)
                                }
                                { session.uids.length > 1 ? <span className='text-xs text-neutral-400'>И ещё {session.uids.length - 1} пользователь(-ля)</span> : null }
                            </div>
                        </div>)
                    }
                </div>
            }
        </div>
    )
}

export default SessionPage