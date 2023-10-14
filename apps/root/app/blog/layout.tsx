import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs'

type Props = {
    children: React.ReactNode
}
const BlogLayout = ({ children }: Props) => {
    return (
        <div className='flex flex-col w-full gap-8 pt-12 mx-auto max-w-7xl'>
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