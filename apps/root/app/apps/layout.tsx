import React from 'react'

type Props = {
    children: React.ReactNode
}
const AppLayout = ({ children }: Props) => {
    return (
        <div className='flex flex-col w-full h-full max-w-6xl gap-8 mx-auto'>
            {children}
        </div>
    )
}

export default AppLayout