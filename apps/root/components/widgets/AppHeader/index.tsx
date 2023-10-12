'use client'
import React from 'react'
import dm from '@ui/assets/dm.svg'
import empty from '@ui/assets/EmptyUser.svg'
import Image from 'next/image'
import Avatar from '@ui/components/shared/Avatar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@ui/utils/app'

const AppHeader = () => {
    const [user] = useAuthState(auth)
    return (
        <header className='flex items-center w-full h-20 py-2'>
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto h-fit">
                <Image src={dm} width={36} height={36} alt='dm-logo' />
                <Avatar size={36} src={user?.photoURL} fallbackImage={empty} />
            </div>
        </header>
    )
}

export default AppHeader