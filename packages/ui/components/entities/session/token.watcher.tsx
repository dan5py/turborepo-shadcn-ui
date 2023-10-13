'use client'
import { useSearchParams, redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useLocalStorageState } from 'ahooks'
import { Session } from "@ui/types/index"
import { setSession } from './session'
import { host } from '@ui/const/host'
import { verifyToken } from '@ui/helpers/token'

const TokenWatcher = () => {
    const params = useSearchParams()
    const token = params.get('token')
    const [sid, setSid] = useLocalStorageState<string | null>( 'sid', { defaultValue: null } );
    const dispatch = useAppDispatch()
    const session = useAppSelector(state => state.watcher.session)
    const extractToken = () => {
        if (token) {
            const extractToken = params.toString().replace(`token=${token}`, '')
            if (sid !== token) {
                setSid(token)
            }
            return redirect(`?${extractToken}`)
        }
    }
    const getSession = async(sid: string) => {
        try {
            const token = await verifyToken(sid)
            const fetchUrl = `${host}/auth/session?sid=${token}`
            const res = await fetch(fetchUrl)
            if (res.ok) {
                const session: string = await res.json()
                if (session) {
                    const extractedSession = await verifyToken(session) as { session: Session } | null
                    if (extractedSession) dispatch(setSession(extractedSession.session))
                }
            }
        } catch(e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (token && token !== '') {
            extractToken()
        } else {
            if (session.sid) getSession(session.sid)
        }
    },[params, token])
    return (
        <></>
    )
}

export default TokenWatcher