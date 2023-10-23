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
            <div className="flex flex-col w-full h-full gap-2 p-2">
                <div className="flex flex-col h-full gap-2 px-2 border-r w-72 border-neutral-700">
                    <span className='text-lg font-medium'>Планы</span>
                    <div className="flex flex-col w-full gap-2 p-3 h-fit rounded-xl bg-neutral-900">
                        <div className="flex items-center w-full gap-2 h-fit">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-neutral-800"><span className='text-lg font-medium text-neutral-300'>1</span></div>
                            <span className='font-medium text-neutral-300'>План по захвату мира</span>
                        </div>
                        <span className='text-sm text-neutral-400'>План следующий, собрать группировки по всей территории страны</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage