import PromoCodeForm from '@/components/widgets/PromoCodeForm'
import Image from 'next/image'
import React from 'react'
import dm_plus from '@ui/assets/dm+.svg'

const PromoActivatePage = () => {
    return (
        <div className='flex items-center justify-center w-full h-full wrapper_under_header'>
            <div className="flex flex-col items-center justify-center w-full max-w-xl gap-4 h-96">
                <div className="flex items-center justify-center w-full h-full gap-2">
                    <div className="relative">
                        <Image src={dm_plus} className='absolute scale-110 blur-lg' width={128} height={128} alt='dm+_logo' />
                        <Image src={dm_plus} className='z-10' width={128} height={128} alt='dm+_logo' />
                    </div>
                    <h1 className='font-bold text-center text-9xl'>DM+</h1>
                </div>
                <h2 className='text-2xl font-semibold'>Активируйте промокод</h2>
                <PromoCodeForm />
            </div>
        </div>
    )
}

export default PromoActivatePage