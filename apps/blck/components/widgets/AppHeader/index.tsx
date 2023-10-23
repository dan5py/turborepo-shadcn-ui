'use client'
import blck from '@ui/assets/blck.svg'
import Image from 'next/image'
import LogoSubtitle from '@ui/components/shared/LogoSubtitle'
import UserSection from '@/components/entities/user'
import Sidebar from './ui/Sidebar'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { setOpen } from '@/components/entities/sidebar/store'
import { AnimatePresence } from 'framer-motion'
import Overlay from './ui/Overlay'

const AppHeader = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(state => state.sidebar.isOpen)
    return (
        <>
            <Overlay />
            <header className='flex flex-col h-screen gap-2 p-2 shrink-0 w-14'>
                <Sidebar />
                <div className="flex flex-col items-center justify-between w-full h-full shrink-0">
                    <div onClick={() => dispatch(setOpen(true))}
                    className="relative flex flex-col w-full gap-4 h-fit">
                        <Image src={blck} width={36} height={36} alt='dm-logo' />
                        <div className="absolute top-0 -right-5"><LogoSubtitle /></div>
                    </div>
                    <div className="relative flex flex-col w-full gap-4 h-fit">
                        <UserSection />
                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader