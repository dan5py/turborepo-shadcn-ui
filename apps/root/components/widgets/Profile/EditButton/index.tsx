'use client'
import Avatar from '@ui/components/shared/Avatar'
import { Button } from '@ui/components/ui/button'
import { auth } from '@ui/utils/app'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiPencil } from 'react-icons/bi'
import fallbackImg from '@ui/assets/EmptyUser.svg'

const EditButton = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    return (
        <div className="flex items-center w-full h-16 max-w-md gap-4 px-4 mx-auto bg-black bg-opacity-50 border rounded-xl backdrop-blur border-neutral-800">
            <div className="flex items-center gap-2 w-fit h-fit">
                <Avatar src={user?.photoURL as string | null} fallbackImage={fallbackImg} size={36} />
                <div className="flex flex-col justify-center w-full h-full">
                    <span className='font-semibold text-neutral-200'>{user?.displayName || 'Пользователь'}</span>
                    <span className='text-xs text-neutral-400'>{user?.email}</span>
                </div>
            </div>
            <div className="flex items-center h-full w-fit">
                <Button onClick={() => router.push('/profile/personal/edit')} variant='outline' size='icon'><BiPencil /></Button>
            </div>
        </div>
    )
}

export default EditButton