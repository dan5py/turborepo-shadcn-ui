import React from 'react'
import dm from '@ui/assets/dm.svg'
import Image from 'next/image'
import LogoSubtitle from '@ui/components/shared/LogoSubtitle'
import Link from 'next/link'
import UserSection from '@/components/entities/user'

const AppHeader = () => {
    return (
        <header className='flex items-center w-full h-20 py-2'>
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto h-fit">
                <Link href='/' className='inline-flex items-center gap-1'>
                    <Image src={dm} width={36} height={36} alt='dm-logo' />
                    <LogoSubtitle />
                </Link>
                <UserSection />
            </div>
        </header>
    )
}

export default AppHeader