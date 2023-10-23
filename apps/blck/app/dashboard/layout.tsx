import AppHeader from '@/components/widgets/AppHeader'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const DashboardLayout = ({ children }: Props) => {
    return (
        <div className='flex items-center w-full min-h-screen'>
            <AppHeader />
            <div className="w-full h-screen">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout