'use client'
import { motion } from 'framer-motion'
import blck from '@ui/assets/blck.svg'
import Image from 'next/image'
import LogoSubtitle from '@ui/components/shared/LogoSubtitle'
import Link from 'next/link'
import { BiChevronLeft, BiHome, BiNote, BiNotepad } from 'react-icons/bi'
import { Button } from '@ui/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { setOpen } from '@/components/entities/sidebar/store'

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(state => state.sidebar.isOpen)
    if (!isOpen) return null
    return (
        <motion.aside initial={{ x: '-18rem' }} animate={{ x: '0' }} exit={{ x: '-18rem' }} transition={{ bounce: 0 }}
        className='absolute top-0 left-0 z-20 flex flex-col h-full p-4 w-72 bg-neutral-900 rounded-r-xl'>
            <div className="flex items-center justify-between w-full gap-2 h-fit">
                <Link href='/' className="flex items-center gap-2 w-fit h-fit">
                    <Image src={blck} width={36} height={36} alt='dm-logo' />
                    <div className="flex items-center gap-2 w-fit h-fit">
                        <span className='text-3xl font-medium'>blck</span>
                        <LogoSubtitle />
                    </div>
                </Link>
                <Button onClick={() => dispatch(setOpen(false))} variant='ghost' size='icon'><BiChevronLeft size={19} /></Button>
            </div>
            <div className="flex flex-col w-full mt-12 h-fit">
                <div className="flex items-center w-full h-10 gap-6 px-4 py-2 bg-transparent cursor-pointer rounded-xl hover:bg-neutral-800"><BiHome size={19} className='mb-0.5' /> Главная</div>
                <div className="flex items-center w-full h-10 gap-6 px-4 py-2 bg-transparent cursor-pointer rounded-xl hover:bg-neutral-800"><BiNotepad size={19} className='mb-0.5' /> Планы</div>
                <div className="flex items-center w-full h-10 gap-6 px-4 py-2 bg-transparent cursor-pointer rounded-xl hover:bg-neutral-800"><BiNote size={19} className='mb-0.5' /> Заметки</div>
            </div>
        </motion.aside>
    )
}

export default Sidebar