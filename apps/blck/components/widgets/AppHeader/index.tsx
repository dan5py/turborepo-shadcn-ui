'use client'
import blck from '@ui/assets/blck.svg'
import Image from 'next/image'
import UserSection from '@/components/entities/user'
import Sidebar from './ui/Sidebar'
import { useAppDispatch } from '@/components/entities/store/store'
import { setOpen } from '@/components/entities/sidebar/store'
import Overlay from './ui/Overlay'
import { BiHome, BiNote, BiNotepad } from 'react-icons/bi'
import Link from 'next/link'

const AppHeader = () => {
    const dispatch = useAppDispatch()
    // const isOpen = useAppSelector(state => state.sidebar.isOpen)
    return (
        <>
            <Overlay />
            <header className='flex flex-col w-16 h-screen gap-2 p-3 border-r shrink-0 border-neutral-700'>
                <Sidebar />
                <div className="flex flex-col items-center justify-between w-full h-full shrink-0">
                    <div className="flex flex-col w-full gap-12 h-fit">
                        <div onClick={() => dispatch(setOpen(true))} className="relative flex flex-col w-full gap-4 h-fit">
                            <Image src={blck} width={36} height={36} alt='dm-logo' />
                        </div>
                        <div className="flex flex-col w-full gap-2 h-fit">
                            <Link href='/dashboard'
                            className="flex items-center justify-center w-full border rounded-lg aspect-square border-neutral-700 hover:bg-neutral-900">
                                <BiHome size={19} />
                            </Link>
                            <div className="flex items-center justify-center w-full border rounded-lg aspect-square border-neutral-700 hover:bg-neutral-900">
                                <BiNotepad size={19} />
                            </div>
                            <div className="flex items-center justify-center w-full border rounded-lg aspect-square border-neutral-700 hover:bg-neutral-900">
                                <BiNote size={19} />
                            </div>
                        </div>
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