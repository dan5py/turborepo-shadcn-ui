'use client'

import { useAppSelector } from "@/components/entities/store/store"
import { BiFolder, BiFont, BiImage } from "react-icons/bi"

const BlocksSide = () => {
    const title = useAppSelector(state => state.uploader.draft.draft.title)
    const blocks = useAppSelector(state => state.uploader.draft.draft.blocks)
    return (
        <div className="flex flex-col h-full gap-4 p-4 w-96 shrink-0">
            <span className='text-sm text-neutral-300'>Структура блоков</span>
            <div className="flex flex-col w-full h-full gap-2">
                <div className="flex flex-col w-full gap-2 p-2 border h-fit rounded-xl border-neutral-800">
                    <div className="flex items-center w-full gap-2 h-fit">
                        <BiFolder />
                        <span className='text-sm text-neutral-300'>Неизменяемые</span>
                    </div>
                    <div className="flex items-center w-full h-10 gap-2 p-2 rounded-xl bg-neutral-900">
                        <BiFont />
                        <span className="w-full text-sm text-neutral-300 line-clamp-1">{title || 'Заголовок'}</span>
                    </div>
                    <div className="flex items-center w-full h-10 gap-2 p-2 rounded-xl bg-neutral-900">
                        <BiImage />
                        <span className="w-full text-sm text-neutral-300 line-clamp-1">Обложка</span>
                    </div>
                </div>
            </div>
            {
                blocks.map((block, i) => <div key={block.type + i} className="w-full h-10 rounded-xl bg-neutral-900"></div> )
            }
        </div>
    )
}

export default BlocksSide