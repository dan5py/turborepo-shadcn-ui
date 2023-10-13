import ContactPreview from '@/components/widgets/Profile/ContactPreview'
import EditButton from '@/components/widgets/Profile/EditButton'
import EditButtonWrapper from '@/components/widgets/Profile/EditButton/ui/EditButtonWrapper'
import React from 'react'

const PersonalPage = () => {
    return (
        <>
            <EditButtonWrapper>
                <EditButton />
            </EditButtonWrapper>
            <div className="w-full max-w-2xl mx-auto">
                <ContactPreview />
            </div>
        </>
    )
}

export default PersonalPage