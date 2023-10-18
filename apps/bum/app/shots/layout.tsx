import AppHeader from '@/components/widgets/AppHeader'
import { Input } from '@ui/components/ui/input'
import React from 'react'
import CategoryAndOrder from './CategoryAndOrder'

type Props = {
    children: React.ReactNode
}
const ShotsLayout = ({ children }: Props) => {
    return (
        <>
            <AppHeader />
            <div className="flex flex-col w-full h-full gap-12">
                <div className="flex flex-col items-center justify-center w-full p-4 h-96">
                    <div className="w-full max-w-lg">
                        <Input placeholder="Поиск" className="text-center" />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4 h-fit">
                    <CategoryAndOrder />
                    <main className="grid w-full px-4 py-4 h-fit shots_grid gap-9">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default ShotsLayout