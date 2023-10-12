import React from 'react'
import dm from '@ui/assets/dm.svg'
import Image from 'next/image'
const AppHeader = () => {
    return (
        <header className='flex items-center w-full h-20 py-2'>
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto h-fit">
                <Image src={dm} width={36} height={36} alt='dm-logo' />
                <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
        </header>
    )
}

export default AppHeader