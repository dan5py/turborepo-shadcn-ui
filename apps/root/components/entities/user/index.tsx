'use client'

import { Button } from "@ui/components/ui/button"
import { auth } from "@ui/utils/app"
import { useAuthState } from "react-firebase-hooks/auth"
import { BiGridAlt, BiLoaderAlt, BiLogOut, BiUser } from "react-icons/bi"
import empty from '@ui/assets/EmptyUser.svg'
import Avatar from '@ui/components/shared/Avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@ui/components/ui/dropdown-menu'
import { useAppDispatch, useAppSelector } from "../store/store"
import { BsPatchCheck } from 'react-icons/bs'
import { MdOutlineOpenInNew } from 'react-icons/md'
import SubLabel from "@ui/components/shared/SubLabel"
import dm from '@ui/assets/dm.svg'
import Image from "next/image"
import { Session } from "@ui/types"
import { setSession } from "@ui/components/entities/session/session"
import SessionSection from "./ui/SessionSection"
import Link from "next/link"
const UserSection = () => {
    const [user, loading] = useAuthState(auth)
    const isSub = useAppSelector(state => state.user.isSubscriber)
    const session = useAppSelector(state => state.watcher.session)
    const dispatch = useAppDispatch()
    const redirect_url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://darkmaterial.space'
    const authLink = `https://auth.darkmaterial.space/auth/signin?back_url=${redirect_url}`
    const getSignOut = () => {
        const updatedSession: Session = {
            ...session,
            uid: null
        }
        dispatch(setSession(updatedSession))
        auth.signOut()
    }
    if (loading) return <div className="rounded-full shrink-0 animate-pulse w-9 h-9 bg-neutral-900"/>
    if (!user) return (
        <Link href={authLink}><Button><BiUser className='mr-1' size={15} />Войти</Button></Link>
    )
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Avatar size={36} isSub={isSub || false} src={user?.photoURL} fallbackImage={empty} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 w-60 rounded-xl">
                <DropdownMenuLabel className='flex flex-col justify-center w-full pt-0'>
                    <div className="flex items-center w-full gap-1 h-fit">
                        <span className='text-base font-semibold text-neutral-200 line-clamp-1'>{user.displayName || 'Пользователь'}</span>
                        { isSub && <SubLabel mini /> }
                    </div>
                    <span className='text-xs font-normal text-neutral-400 line-clamp-1'>{user.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <Link href='/profile'><DropdownMenuItem><BiUser className='mr-2' />Профиль</DropdownMenuItem></Link>
                <DropdownMenuItem><BiGridAlt className='mr-2' />Приложения</DropdownMenuItem>
                <SessionSection />
                <DropdownMenuSeparator/>
                    <DropdownMenuItem><Image src={dm} width={16} className="mr-1" height={16} alt='dm-logo' /><span>DarkMaterial</span><MdOutlineOpenInNew className='ml-auto' /></DropdownMenuItem>
                    <DropdownMenuItem onClick={getSignOut}><BiLogOut className='mr-2' />Выйти из профиля</DropdownMenuItem>
                <DropdownMenuSeparator/>
                {
                    !isSub
                    ? <DropdownMenuItem className="text-black bg-white hover:!text-black hover:!bg-neutral-200 active:text-black active:bg-neutral-300">
                        <span className="inline-flex items-center mx-auto text-inherit"><BsPatchCheck className='mr-2 text-inherit' />Улучшить до Плюс</span>
                    </DropdownMenuItem>
                    : <DropdownMenuItem><span className="mx-auto text-neutral-400">Вы в плюсе</span></DropdownMenuItem>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserSection