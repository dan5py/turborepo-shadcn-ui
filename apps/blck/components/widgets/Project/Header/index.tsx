import React from 'react'
import ProjectMembers from './ui/ProjectMembers'

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full p-2 border-b h-14 border-neutral-700">
            <div className="flex items-center h-full gap-2 px-2 py-1 border rounded-lg w-fit bg-neutral-900 border-neutral-700">
                <span className='text-sm text-neutral-300'>Проекты</span>
                <span className='text-sm text-neutral-300'>/</span>
                <span className='text-sm text-neutral-300'>empty</span>
            </div>
            <ProjectMembers />
        </div>
    )
}

export default Header