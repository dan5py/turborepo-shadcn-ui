import React from 'react'

const BlogPage = () => {
    return (
        <div className='flex flex-col w-full h-full gap-12'>
            <h2 className='text-4xl font-semibold text-neutral-200'>Все посты</h2>
            <div className="grid w-full grid-cols-3 grid-rows-3 gap-4 h-[600px]">
                <div className="relative flex flex-col w-full h-full row-span-3 gap-4 border rounded-xl border-neutral-700">
                    <div className="absolute bottom-0 left-0 flex flex-col w-full gap-2 p-6 h-fit">
                        <h3 className='text-2xl font-bold text-neutral-200'>Заголовок для статьи блога</h3>
                        <div className="flex items-center justify-between w-full gap-2 h-fit">
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Авторы статьи</span>
                            </div>
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Дата публикации</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full row-span-1 border rounded-xl border-neutral-700">
                    <div className="absolute bottom-0 left-0 flex flex-col w-full gap-2 p-6 h-fit">
                        <h3 className='text-2xl font-bold text-neutral-200'>Заголовок для статьи блога</h3>
                        <div className="flex items-center justify-between w-full gap-2 h-fit">
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Авторы статьи</span>
                            </div>
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Дата публикации</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full row-span-2 border rounded-xl border-neutral-700">
                    <div className="absolute bottom-0 left-0 flex flex-col w-full gap-2 p-6 h-fit">
                        <h3 className='text-2xl font-bold text-neutral-200'>Заголовок для статьи блога</h3>
                        <div className="flex items-center justify-between w-full gap-2 h-fit">
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Авторы статьи</span>
                            </div>
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Дата публикации</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full row-span-2 border rounded-xl border-neutral-700">
                    <div className="absolute bottom-0 left-0 flex flex-col w-full gap-2 p-6 h-fit">
                        <h3 className='text-2xl font-bold text-neutral-200'>Заголовок для статьи блога</h3>
                        <div className="flex items-center justify-between w-full gap-2 h-fit">
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Авторы статьи</span>
                            </div>
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Дата публикации</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full row-span-1 border rounded-xl border-neutral-700">
                    <div className="absolute bottom-0 left-0 flex flex-col w-full gap-2 p-6 h-fit">
                        <h3 className='text-2xl font-bold text-neutral-200'>Заголовок для статьи блога</h3>
                        <div className="flex items-center justify-between w-full gap-2 h-fit">
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Авторы статьи</span>
                            </div>
                            <div className="flex items-center gap-2 w-fit h-fit">
                                <span className='text-sm text-neutral-400'>Дата публикации</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage