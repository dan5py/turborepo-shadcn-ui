'use client'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { setTitle } from '@/components/entities/uploader/draft'
import { Input } from '@ui/components/ui/input'
import React from 'react'

const DraftPreview = () => {
    const title = useAppSelector(state => state.uploader.draft.draft.title)
    const dispatch = useAppDispatch()
    return (
        <div className="w-full h-full p-8 bg-black rounded-3xl">
            <div className="flex flex-col w-full max-w-3xl gap-12 mx-auto h-fit">
                <Input placeholder='Названия работы' value={title} onChange={e => dispatch(setTitle(e.target.value))}
                className='text-2xl !border-0 !ring-0 !rounded-none text-center' />
                <div className="w-full aspect-[4/3] rounded-xl border border-neutral-800"></div>
            </div>
        </div>
    )
}

export default DraftPreview