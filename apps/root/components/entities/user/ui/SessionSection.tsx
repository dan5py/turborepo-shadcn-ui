'use client'
import React, { useState } from 'react'
import { useAppSelector } from '../../store/store'
import SessionUser from './SessionUser'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { PiUsersThree } from 'react-icons/pi'
import { DropdownMenuGroup, DropdownMenuLabel } from '@ui/components/ui/dropdown-menu'
import { motion } from 'framer-motion'
const SessionSection = () => {
    const [expand, setExpand] = useState<boolean>(false)
    const session = useAppSelector(state => state.watcher.session)
    if (session.uids.length <= 1) return null
    return (
        <DropdownMenuGroup className={`border rounded-xl ${expand ? 'bg-neutral-900 border-neutral-800' : 'border-transparent'}`}>
            <DropdownMenuLabel onClick={() => setExpand(!expand)} className='flex items-center justify-between gap-2 cursor-pointer'>
                <div className="flex items-center gap-1 shrink-0">
                    <PiUsersThree size={14} className='mr-2' />
                    <span className='font-normal text-neutral-200'>{expand ? 'Скрыть аккаунты' : 'Другие аккаунты'}</span>
                </div>
                { expand ? <BiChevronUp className='shrink-0' size={17} /> : <BiChevronDown className='shrink-0' size={17} /> }
            </DropdownMenuLabel>
            <motion.div initial={{ height: 0 }} animate={{ height: expand ? 48 * session.uids.length : 0 }} className="flex flex-col w-full overflow-hidden h-fit">
            { 
                expand && session.uids.map(uid => <DropdownMenuLabel key={uid + 'session'}>
                    <SessionUser setExpand={setExpand} uid={uid} />
                </DropdownMenuLabel>
            )}
            </motion.div>
        </DropdownMenuGroup>
    )
}

export default SessionSection