'use client'
import { Button } from '@ui/components/ui/button'
import { auth } from '@ui/utils/app'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLock } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

const ContactPreview = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="flex flex-col w-full gap-2 h-fit">
            <h3 className='text-xl font-bold text-neutral-200'>Контакты</h3>
            <div className="flex flex-col w-full h-full gap-2">
                <div className="flex items-center w-full h-16 gap-2">
                    <div className="flex items-center h-full p-2 w-fit shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-neutral-900"><MdEmail /></div>
                    </div>
                    <div className="flex items-center justify-between w-full h-full border-b border-neutral-800 ">
                        <div className="flex flex-col justify-center h-full w-fit">
                            <span className='text-xs text-neutral-400'>Почта</span>
                            <span className='text-lg font-semibold text-neutral-200'>{user?.email}</span>
                        </div>
                        <Button disabled className='px-3' variant='outline'><BiLock /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPreview