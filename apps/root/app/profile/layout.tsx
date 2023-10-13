import ProfileHeader from '@/components/widgets/Profile/Header'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const ProfileLayout = ({ children }: Props) => {
    return (
        <section className="flex flex-col w-full max-w-4xl min-h-full gap-4 px-4 py-6 mx-auto">
            <ProfileHeader />
            <section className="flex flex-col w-full h-full gap-8">
                {children}
            </section>
        </section>
    )
}

export default ProfileLayout