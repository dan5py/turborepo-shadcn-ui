'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Input } from '@ui/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs'

const Header = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [tab, setTab] = useState<string>('/profile')
    useLayoutEffect(() => {
        if (tab !== pathname) setTab(pathname)
    }, [pathname])
    useLayoutEffect(() => {
        if (tab !== pathname) router.push(tab)
    },[tab])
    return (
        <header className='sticky top-0 flex flex-col w-full gap-4 py-2 bg-black h-fit'>
            <div className="flex items-center justify-center w-full gap-4 h-fit">
                {/* <Link href='/'><BiChevronLeft/></Link> */}
                <div className="flex items-center w-full max-w-md px-2 border rounded-lg border-neutral-800">
                    <BiSearch width={19} height={19} />
                    <Input placeholder='Поиск' className='w-full max-w-md border-0 focus-visible:ring-0' />
                </div>
                {/* <div className="shrink-0"><UserSection /></div> */}
            </div>
            <nav className='flex items-center justify-center w-full h-12 gap-2'>
                <Tabs defaultValue="/profile" value={tab} className="w-full" onValueChange={tab => setTab(tab)}>
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="/profile">Главная</TabsTrigger>
                        <TabsTrigger value="/profile/personal">Данные</TabsTrigger>
                        <TabsTrigger disabled value="/profile/pay">DM Pay</TabsTrigger>
                        <TabsTrigger disabled value="/profile/team">Команда</TabsTrigger>
                    </TabsList>
                </Tabs>
            </nav>
        </header>
    )
}

export default Header