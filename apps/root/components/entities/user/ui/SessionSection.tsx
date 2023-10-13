'use client'
import React, { useState } from 'react'
import { useAppSelector } from '../../store/store'
import SessionUser from './SessionUser'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { PiUsersThree } from 'react-icons/pi'
import { DropdownMenuGroup, DropdownMenuLabel } from '@ui/components/ui/dropdown-menu'
const SessionSection = () => {
    const [expand, setExpand] = useState<boolean>(false)
    const session = useAppSelector(state => state.watcher.session)
    if (session.uids.length <= 1) return 0
    if (!expand) {
        return (
            <DropdownMenuLabel onClick={() => setExpand(true)} className='flex items-center justify-between gap-2 rounded-sm cursor-pointer hover:bg-neutral-800'>
                <div className="flex items-center shrink-0">
                    <PiUsersThree size={14} className='mr-2' />
                    <span className='font-normal text-neutral-200'>Другие аккаунты</span>
                </div>
                <BiChevronDown className='shrink-0' size={17} />
            </DropdownMenuLabel>
        )
    }
    return (
        <DropdownMenuGroup className='border rounded-xl bg-neutral-900 border-neutral-800'>
            <DropdownMenuLabel onClick={() => setExpand(false)} className='flex items-center justify-between gap-2 cursor-pointer'>
                <div className="flex items-center gap-1 shrink-0">
                    <PiUsersThree size={14} className='mr-2' />
                    <span className='font-normal text-neutral-200'>Скрыть аккаунты</span>
                </div>
                <BiChevronUp className='shrink-0' size={17} />
            </DropdownMenuLabel>
            { 
                session.uids.map(uid => <DropdownMenuLabel key={uid + 'session'}>
                    <SessionUser setExpand={setExpand} uid={uid} />
                </DropdownMenuLabel>
            )}
        </DropdownMenuGroup>
    )
}

export default SessionSection