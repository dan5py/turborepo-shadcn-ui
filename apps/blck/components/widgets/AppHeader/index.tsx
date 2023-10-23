import React from 'react'
import blck from '@ui/assets/blck.svg'
import Image from 'next/image'
import LogoSubtitle from '@ui/components/shared/LogoSubtitle'
import Link from 'next/link'
import UserSection from '@/components/entities/user'

const AppHeader = () => {
    return (
        <header className='flex flex-col justify-center w-full gap-2 py-4 md:py-2 shrink-0 md:h-20 h-fit'>
            <div className="flex items-center justify-between w-full max-w-5xl px-4 mx-auto shrink-0 h-fit">
                <div className="flex items-center gap-4 w-fit h-fit">
                    <Link href='/' className='inline-flex items-center gap-1'>
                        <Image src={blck} width={36} height={36} alt='dm-logo' />
                        <LogoSubtitle />
                    </Link>
                    <nav className="items-center hidden gap-2 md:flex">
                    </nav>
                </div>
                <UserSection />
            </div>
            <div className="flex items-center justify-between w-full max-w-5xl px-4 mx-auto shrink-0 md:hidden h-fit">
                <nav className="flex items-center gap-2 w-fit">
                </nav>
            </div>
        </header>
    )
}

export default AppHeader