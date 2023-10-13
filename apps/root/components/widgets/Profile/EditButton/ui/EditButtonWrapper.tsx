'use client'
import { useAppSelector } from '@/components/entities/store/store'
import Image from 'next/image'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const EditButtonWrapper = ({ children }: Props) => {
    const isSub = useAppSelector(state => state.user.isSubscriber)
    return (
        <div className="relative flex items-center justify-center w-full h-96">
            <div className="z-50 w-fit h-fit">{children}</div>
            <Image src={isSub ? '/Plus-Banner.svg' : '/Banner.svg'} fill className='object-cover' alt='banner' />
        </div>
    )
}

export default EditButtonWrapper