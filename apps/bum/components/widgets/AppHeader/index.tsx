import UserSection from '@/components/entities/user'
import React from 'react'
import NavSection from './ui/NavSection'


const AppHeader = () => {
    return (
        <header className='w-full p-4'>
            <div className="flex items-center justify-between w-full h-full gap-2">
                <NavSection />
                <UserSection />
            </div>
        </header>
    )
}

export default AppHeader