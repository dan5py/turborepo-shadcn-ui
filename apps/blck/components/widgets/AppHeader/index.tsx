import React from 'react'
import blck from '@ui/assets/blck.svg'
import Image from 'next/image'
import LogoSubtitle from '@ui/components/shared/LogoSubtitle'
import Link from 'next/link'
import UserSection from '@/components/entities/user'
import Sidebar from './ui/Sidebar'

const AppHeader = () => {
    return (
        <header className='flex flex-col h-screen gap-2 p-2 w-14'>
            <Sidebar />
            <div className="flex flex-col items-center justify-between w-full h-full shrink-0">
                <div className="relative flex flex-col w-full gap-4 h-fit">
                    <Link href='/' className='inline-flex items-center gap-1'>
                        <Image src={blck} width={36} height={36} alt='dm-logo' />
                        <div className="absolute top-0 -right-5"><LogoSubtitle /></div>
                    </Link>
                </div>
                <div className="relative flex flex-col w-full gap-4 h-fit">
                    <UserSection />
                </div>
            </div>
        </header>
    )
}

export default AppHeader