import React from 'react'

const BlogPage = () => {
    return (
        <div className='flex flex-col w-full h-full gap-12'>
            <h2 className='text-2xl font-semibold text-neutral-200'>*SectionName*</h2>
            <div className="grid w-full grid-cols-3 grid-rows-3 gap-4 h-[600px]">
                <div className="w-full h-full row-span-3 border rounded-xl border-neutral-700"></div>
                <div className="w-full h-full row-span-1 border rounded-xl border-neutral-700"></div>
                <div className="w-full h-full row-span-2 border rounded-xl border-neutral-700"></div>
                <div className="w-full h-full row-span-2 border rounded-xl border-neutral-700"></div>
                <div className="w-full h-full row-span-1 border rounded-xl border-neutral-700"></div>
            </div>
        </div>
    )
}

export default BlogPage