import Avatar from '@ui/components/shared/Avatar'
import { host } from '@ui/const/host'
import { ShortUserData } from '@ui/types/index'
import { useDebounceEffect } from 'ahooks'
import { Dispatch, SetStateAction, useLayoutEffect, useState } from 'react'
import { BiCheck, BiLoaderAlt, BiUser } from 'react-icons/bi'

type Props = {
    uid: string
    selectedUser: string | null,
    setSelectedUser: Dispatch<SetStateAction<string | null>>
}
const UserSelect = ({ selectedUser, setSelectedUser, uid }: Props) => {
    const isSelected = selectedUser === uid
    const [loading, setLoading] = useState<boolean>(false)
    const [userData, setUserData] = useState<ShortUserData | null>(null)
    const fetchData = async() => {
        try {
            const userRes = await fetch(`${host}/users/shortData?userId=${uid}`, { method: 'GET' })
            const user: { short: ShortUserData } | null = await userRes.json()
            setUserData(user ? user?.short : null)
        } catch(e) {

        }
    }
    useLayoutEffect(() => {
        fetchData()
    },[uid])
    useDebounceEffect(() => {
        if (isSelected) {
            setLoading(false)
        }
    },[isSelected, selectedUser, uid], { wait: 500 })
    return (
        <div onClick={() => {
            setSelectedUser( isSelected ? null : uid )
            setLoading(true)
        }} 
        className="flex items-center w-full gap-2 px-2 py-2 cursor-pointer rounded-xl hover:bg-neutral-950 h-fit">
            <div className="relative shrink-0">
                { 
                    userData && userData.photoUrl 
                    ? <Avatar src={userData?.photoUrl} size={40} /> 
                    : <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800"><BiUser size={18} /></div>
                }
                {
                    loading 
                    ?
                    <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-full">
                        <BiLoaderAlt className='text-white animate-spin' size={32} />
                    </div>
                    : isSelected 
                    ? <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                        <BiCheck className='text-white' size={32} />
                    </div>
                    : null
                }
            </div>
            <div className="flex flex-col w-full h-full gap-1">
                <span className='font-semibold text-neutral-200'>{userData?.displayName || 'Пользователь'}</span>
                <span className='text-xs text-neutral-400'>{userData?.email}</span>
            </div>
        </div>
    )
}

export default UserSelect