import Avatar from '@ui/components/shared/Avatar'
import React, { useLayoutEffect, useState } from 'react'
import fallbackImg from '@ui/assets/EmptyUser.svg'
import { BiUser } from 'react-icons/bi'
import { host } from '@ui/const/host'
import { ShortUserData } from '@ui/types'
import { Button } from '@ui/components/ui/button'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@ui/utils/app'

type Props = {
    uid: string
    onClick?: (params?: any) => void
}
const SessionUser = ({ uid, onClick }: Props) => {
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState<ShortUserData | null>(null)
    const fetchData = async() => {
        try {
            const userRes = await fetch(`${host}/users/shortData?userId=${uid}`, { method: 'GET' })
            const user: { short: ShortUserData } | null = await userRes.json()
            setUserData(user ? user?.short : null)
        } catch(e) {

        }
    }
    useLayoutEffect(() => {
        fetchData()
    },[uid])
    return (
        <div onClick={onClick}
        className="flex items-center justify-between w-full gap-2 cursor-pointer rounded-xl h-fit">
            <div className="flex items-center gap-2 w-fit h-fit">
                <div className="relative shrink-0">
                    { 
                        userData && userData.photoUrl 
                        ? <Avatar src={userData?.photoUrl} fallbackImage={fallbackImg} size={40} /> 
                        : <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800"><BiUser size={18} /></div>
                    }
                </div>
                <div className="flex flex-col w-full h-full gap-1">
                    <span className='font-semibold text-neutral-200'>{userData?.displayName || 'Пользователь'}</span>
                    <span className='text-xs text-neutral-400'>{userData?.email}</span>
                </div>
            </div>
            <Button disabled={user ? user.uid !== uid : !user ? true : true} variant='destructive' size='sm'>Выйти</Button>
        </div>
    )
}

export default SessionUser