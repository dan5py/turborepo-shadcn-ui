'use client'

import { Button } from "@ui/components/ui/button"
import { auth } from "@ui/utils/app"
import { useAuthState } from "react-firebase-hooks/auth"
import { BiLoaderAlt, BiLogOut, BiUser } from "react-icons/bi"
import empty from '@ui/assets/EmptyUser.svg'
import Avatar from '@ui/components/shared/Avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@ui/components/ui/dropdown-menu'
import { useAppSelector } from "../store/store"

const UserSection = () => {
    const [user, loading] = useAuthState(auth)
    const isSub = useAppSelector(state => state.user.isSubscriber)
    if (loading) return <div className="rounded-full shrink-0 animate-pulse w-9 h-9 bg-neutral-900"/>
    if (!user) return (
        <Button ><BiUser className='mr-1' size={15} />Войти</Button>
    )
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Avatar size={36} isSub={isSub || false} src={user?.photoURL} fallbackImage={empty} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className='flex items-center w-full gap-2'>
                    <Avatar src={user.photoURL} size={36} />
                    <div className="flex flex-col justify-center w-full h-fit">
                        <span className='font-semibold text-neutral-200 line-clamp-1'>{user.displayName || 'Пользователь'}</span>
                        <span className='text-xs text-neutral-400 line-clamp-1'>{user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <hr className='border-neutral-700' />
                <DropdownMenuItem><BiUser className='mr-2' />Профиль</DropdownMenuItem>
                {/* { <SessionSection /> } */}
                <DropdownMenuItem ><BiLogOut className='mr-2' />Выйти из профиля</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserSection