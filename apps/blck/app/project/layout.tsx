import AppHeader from '@/components/widgets/AppHeader'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const ProjectLayout = ({ children }: Props) => {
    return (
        <div className='flex items-center w-full h-screen'>
            <AppHeader />
            <div className="w-full h-full wrapper_with_sidebar">
                {children}
            </div>
        </div>
    )
}

export default ProjectLayout