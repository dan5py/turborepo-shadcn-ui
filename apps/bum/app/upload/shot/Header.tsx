'use client'
import React from 'react'
import Image from 'next/image'
import bum from '@ui/assets/bum.svg'
import { Button } from '@ui/components/ui/button'
import { BiChevronDown, BiImage, BiFont } from 'react-icons/bi'
import { MdViewCarousel } from 'react-icons/md'
import { useAppSelector } from '@/components/entities/store/store'
import { TextBlock } from '@ui/types'

const Header = () => {
    const title = useAppSelector(state => state.uploader.draft.draft.title)
    const addMediaBlock = () => null
    const addTextBlock = () => {
        const blockTemplate: TextBlock = {
            text: '',
            type: 'text'
        }
        
    }
    const addCarouselBlock = () => null
    return (
        <div className="flex items-center justify-center w-full p-2 h-14">
            <div className="flex items-center w-full h-full gap-2 px-2">
                <Image src={bum} width={32} height={32} alt='bum-logo' />
            </div>
            <div className="flex items-center justify-between w-full h-full max-w-6xl gap-2 px-1 shrink-0">
                <div className="flex items-center justify-between h-full gap-2 px-3 py-2 max-w-[16rem] w-fit rounded-xl bg-neutral-900">
                    <span className='text-sm text-neutral-400 line-clamp-1'>{title || 'Пустой черновик'}</span>
                    <BiChevronDown size={15} className='text-neutral-400' />
                </div>
                <div className="flex items-center justify-center h-full gap-2 mx-auto w-fit">
                    <div onClick={addMediaBlock}
                    className="flex items-center justify-center h-full border rounded-md aspect-square hover:bg-neutral-700 border-neutral-700">
                        <BiImage size={18} />
                    </div>
                    <div onClick={addTextBlock}
                    className="flex items-center justify-center h-full border rounded-md aspect-square hover:bg-neutral-700 border-neutral-700">
                        <BiFont size={18} />
                    </div>
                    <div className="flex items-center justify-center h-full border rounded-md aspect-square hover:bg-neutral-700 border-neutral-700">
                        <MdViewCarousel size={18} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end w-full h-full px-2">
                <Button size='sm' disabled>Продолжить</Button>
            </div>
        </div>
    )
}

export default Header