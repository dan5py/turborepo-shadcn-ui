import React from 'react'
import dm from '@ui/assets/bum.svg'
import Image from 'next/image'
import ShotsWidget from '@/components/widgets/ShotsWidget'
import app_banner from '@ui/assets/other/bum-app-banner.svg'
const BumAppPage = () => {
    return (
        <div className='flex flex-col w-full gap-8 py-12 h-fit'>
            <div className="relative flex flex-col w-full pt-12 h-96 shrink-0">
                <div className="flex flex-col items-center justify-center gap-2 mx-auto w-fit h-fit">
                    <div className="flex items-center gap-2 w-fit h-fit">
                        <Image src={dm} width={48} height={48} alt='bum-app' />
                        <h1 className='text-6xl font-semibold text-neutral-200'>bum</h1>
                    </div>
                    <span className='text-center text-neutral-400'>За руку по миру дизайна</span>
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                    <div className="absolute w-full h-full -z-[5] bg-gradient-to-r from-black via-transparent to-black" />
                    <div className="absolute w-full h-full -z-[5] bg-gradient-to-b from-black to-transparent" />
                    <Image src={app_banner} fill alt='app_banner' className='object-cover -z-10' />
                    <div className="absolute left-0 -z-10 bottom-0 w-full h-0.5 bg-neutral-700"></div>
                </div>
            </div>
            <ShotsWidget hideNav />
        </div>
    )
}

export default BumAppPage