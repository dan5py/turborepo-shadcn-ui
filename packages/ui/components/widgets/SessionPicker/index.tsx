'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import UserSelect from './ui/UserSelect'
import { BiX } from 'react-icons/bi'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDebounceEffect } from 'ahooks'
import { useAppDispatch, useAppSelector } from '@ui/components/entities/store/store'
import { auth } from '@ui/utils/app'
import { setSession } from '@ui/components/entities/session/session'
import { Button } from '@ui/components/ui/button'
import { cdn } from '@ui/helpers/cdn'

const SessionPicker = () => {
    const session = useAppSelector(state => state.watcher.session)
    const [user, loading] = useAuthState(auth)
    const [forcedClose, setForcedClose] = useState<boolean>(true)
    const [selectedUser, setSelectedUser] = useState<string | null>(session.uid ? session.uid : user ? user.uid : null)
    const dispatch = useAppDispatch()
    const signIn = async() => {
        const updatedSession = {
            ...session,
            uid: selectedUser
        }
        dispatch(setSession(updatedSession))
        setSelectedUser(null)
    }
    useEffect(() => {
        if (selectedUser) signIn()
    },[selectedUser])
    useDebounceEffect(() => {
        if (!session.uid) setForcedClose(false)
        if (session.uid) {
            setForcedClose(true)
            if (!selectedUser) setSelectedUser(session.uid)
        }
    },[session], { wait: 2000 })
    useDebounceEffect(() => {
        if (!forcedClose) {
            if (user && !loading) setForcedClose(true)
            if (!user && !loading) setForcedClose(false)
        }
    },[user, forcedClose, loading], { wait: 2000 })
    if (forcedClose || session.uids.length === 0) return null
    return (
        <div className='absolute z-50 flex flex-col w-full max-w-sm border top-3 right-3 h-fit rounded-xl border-neutral-700 bg-neutral-900'>
            <div className="relative flex items-center justify-between w-full gap-2 px-4 py-2 border-b h-fit border-neutral-700">
                <div className="flex items-center gap-2 w-fit h-fit">
                    <Image src={cdn('/dm/icons/dm.svg')} width={28} height={28} className='shrink-0' alt='root-logo' />
                    <span className='text-sm text-neutral-200'>Войдите в аккаунт с помощью DarkMaterial</span>
                </div>
                <Button onClick={() => setForcedClose(true)} className='!absolute !right-0 !px-2' variant='ghost'><BiX size={20} /></Button>
            </div>
            <div className="flex flex-col w-full h-fit">
                <div className="flex flex-col w-full px-3 py-2 h-fit">
                    {
                        session.uids.map(uid => 
                            <UserSelect key={uid} selectedUser={selectedUser} setSelectedUser={setSelectedUser} uid={uid} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SessionPicker