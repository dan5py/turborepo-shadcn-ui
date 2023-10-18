import { Button } from '@ui/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { BiChevronDown, BiFolder, BiFont, BiImage } from 'react-icons/bi'
import { MdViewCarousel } from 'react-icons/md'
import bum from '@ui/assets/bum.svg'
import { Input } from '@ui/components/ui/input'
const UploadPage = () => {
    return (
        <div className='flex flex-col w-full min-h-screen bg-neutral-950'>
            <div className="flex items-center justify-center w-full p-2 h-14">
                <div className="flex items-center w-full h-full gap-2 px-2">
                    <Image src={bum} width={32} height={32} alt='bum-logo' />
                </div>
                <div className="flex items-center justify-between w-full h-full max-w-6xl gap-2 px-1 shrink-0">
                    <div className="flex items-center justify-between h-full gap-2 px-3 py-2 max-w-[16rem] w-fit rounded-xl bg-neutral-900">
                        <span className='text-sm text-neutral-400'>Пустой черновик</span>
                        <BiChevronDown size={15} className='text-neutral-400' />
                    </div>
                    <div className="flex items-center justify-center h-full gap-2 mx-auto w-fit">
                        <div className="flex items-center justify-center h-full border rounded-md aspect-square hover:bg-neutral-700 border-neutral-700">
                            <BiImage size={18} />
                        </div>
                        <div className="flex items-center justify-center h-full border rounded-md aspect-square hover:bg-neutral-700 border-neutral-700">
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
            <div className="flex w-full h-full">
                <div className="flex flex-col h-full gap-4 p-4 w-96 shrink-0">
                    <span className='text-sm text-neutral-300'>Структура блоков</span>
                    <div className="flex flex-col w-full h-full gap-2">
                        <div className="flex flex-col w-full gap-2 p-2 border h-fit rounded-xl border-neutral-800">
                            <div className="flex items-center w-full gap-2 h-fit">
                                <BiFolder />
                                <span className='text-sm text-neutral-300'>Неизменяемые</span>
                            </div>
                            <div className="w-full h-10 rounded-xl bg-neutral-900"></div>
                            <div className="w-full h-10 rounded-xl bg-neutral-900"></div>
                        </div>
                    </div>
                    <div className="w-full h-10 rounded-xl bg-neutral-900"></div>
                </div>
                <div className="flex flex-col w-full h-full overflow-y-auto">
                    <div className="w-full h-full p-8 bg-black rounded-3xl">
                        <div className="flex flex-col w-full max-w-3xl gap-12 mx-auto h-fit">
                            <Input placeholder='Названия работы' className='text-2xl !border-0 !ring-0 !rounded-none text-center' />
                            <div className="w-full aspect-[4/3] rounded-xl border border-neutral-800"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full gap-4 p-4 w-96 shrink-0">
                    <div className="flex items-center justify-center w-full h-fit">
                        <span className='text-sm text-center text-neutral-300'>Инструменты</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage