import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs'

type Props = {
    children: React.ReactNode
}
const BlogLayout = ({ children }: Props) => {
    return (
        <div className='relative flex flex-col w-full gap-8 pt-12 mx-auto max-w-7xl'>
            {
                process.env.NODE_ENV === 'development' &&
                <div className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full backdrop-blur">
                    <span>Страница в разработке...</span>
                </div>
            }
            <div className="flex items-center w-full h-fit">
                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="all">Все посты</TabsTrigger>
                        <TabsTrigger value="bum">bum</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            {children}
        </div>
    )
}

export default BlogLayout