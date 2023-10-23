import Header from '@/components/widgets/Project/Header'
import React from 'react'

type Props = {
    params: {
        projectId: string
    }
}
const ProjectPage = ({ params }: Props) => {
    return (
        <div className='flex flex-col w-full h-full'>
            <Header />
            <div className="flex flex-col w-full h-full p-2">
                
            </div>
        </div>
    )
}

export default ProjectPage