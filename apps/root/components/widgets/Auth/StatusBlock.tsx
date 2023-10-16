'use client'
import Image from 'next/image'
import React from 'react'
import { BiLogOut, BiRightArrowAlt } from 'react-icons/bi'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDebounceEffect } from 'ahooks'
import { setEmail, setPassword } from '@/components/entities/auth/email&password'
import { setStep } from '@/components/entities/auth/steps'
import { setUserInProcess } from '@/components/entities/auth/userInProcess'
import { setSession } from '@ui/components/entities/session/session'
import { useAppSelector, useAppDispatch } from '@/components/entities/store/store'
import Avatar from '@ui/components/shared/Avatar'
import { Button } from '@ui/components/ui/button'
import { auth } from '@ui/utils/app'
import dm from '@ui/assets/dm.svg'
import bum from '@ui/assets/bum.svg'
import fallbackImg from '@ui/assets/EmptyUser.svg'
import { useSearchParams } from 'next/navigation'

const StatusBlock = () => {
    const [user] = useAuthState(auth)
    const userInProcess = useAppSelector(state => state.process.userInProcess)
    const session = useAppSelector(state => state.watcher.session)
    const dispatch = useAppDispatch()
    const params = useSearchParams()
    const back_url = params.get('back_url')
    const logOut = () => {
        dispatch(setSession({
            ...session,
            uid: null
        }))
        auth.signOut()
        dispatch(setUserInProcess(null))
        dispatch(setEmail(''))
        dispatch(setPassword(''))
        dispatch(setStep('email'))
    }
    useDebounceEffect(() => {
        if (user) dispatch(setStep('success'))
    },[user])
    if (user) {
        return (
            <div className="relative flex items-center justify-center w-full h-24 gap-3 p-3 border shrink-0 rounded-xl bg-neutral-900 border-neutral-700">
                <div className="flex items-center gap-3 w-fit h-fit">
                    <Avatar src={user?.photoURL} fallbackImage={fallbackImg} size={36} />
                    <div className="flex flex-col gap-0 w-fit h-fit">
                        <span className='text-sm font-bold line-clamp-1 text-neutral-300 text-start'>{user.displayName || 'Пользователь'}</span>
                        <span className='text-xs line-clamp-1 text-neutral-400 text-start'>{user.email}</span>
                    </div>
                </div>
                <Button onClick={logOut} size='icon'><BiLogOut size={17} /></Button>
            </div>
        )
    }
    if (userInProcess) {
        return (
            <div className="relative flex items-center justify-center w-full h-24 gap-3 p-3 border shrink-0 rounded-xl bg-neutral-900 border-neutral-700">
                <Avatar src={userInProcess?.photoUrl} fallbackImage={fallbackImg} size={36} />
                <div className="flex flex-col gap-0 w-fit h-fit">
                    <span className='text-sm font-bold text-neutral-300 text-start'>{userInProcess.displayName || 'Пользователь'}</span>
                    <span className='text-xs text-neutral-400 text-start'>{userInProcess.email}</span>
                </div>
            </div>
        )
    }
    return (
        <div className="relative flex items-center justify-center w-full h-24 gap-3 p-3 border shrink-0 rounded-xl bg-neutral-900 border-neutral-700">
            <Image src={dm} width={36} height={36} alt='id-logo' />
            {
                back_url && back_url.includes('bum.darkmaterial.space')
                ? <>
                    <BiRightArrowAlt size={25} className='text-neutral-400' />
                    <Image src={bum} width={36} height={36} alt='id-logo' />
                </>
                : null
            }
        </div>
    )
}

export default StatusBlock