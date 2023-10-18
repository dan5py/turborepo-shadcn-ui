import AppHeader from '@/components/widgets/AppHeader'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const ShotsLayout = ({ children }: Props) => {
    return (
        <>
            <AppHeader />
            {children}
        </>
    )
}

export default ShotsLayout