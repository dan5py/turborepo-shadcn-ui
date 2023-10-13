'use client'
import { useToast } from '@ui/components/ui/use-toast'
import { auth } from '@ui/utils/app'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { fileSizeAndType } from '@ui/helpers/file'
import { host } from '@ui/const/host'
import { updateProfile } from 'firebase/auth'
import { useDebounceEffect } from 'ahooks'
import { Input } from '@ui/components/ui/input'
import Avatar from '@ui/components/shared/Avatar'
import fallbackImg from '@ui/assets/EmptyUser.svg'
const PersonalEditPage = () => {
    const [user] = useAuthState(auth)
    const { toast } = useToast()
    const uploadImage = async(file: File) => {
        if (user && file) {
            const typeOf = fileSizeAndType(file)
            if (typeOf === 'jpg' || typeOf === 'png') {
                const postUrl = `${host}/files/file?link=${user.uid}`
                const formData = new FormData()
                formData.append('file', file)
                const postedFetched = await fetch(postUrl, { method: 'POST', body: formData })
                if (postedFetched.ok) {
                    const res = await postedFetched.json()
                    const cdn_url = `https://cdn.darkmaterial.space/${res}`
                    await updateProfile(user, { photoURL: cdn_url })
                    toast({
                        title: 'Автара обновлен!',
                        description: 'Новый аватар отобразится при переходе между страницами',
                    })
                }
            }
        }
    }
    const [userName, setUserName] = useState(user?.displayName || 'Пользователь')
    const updateUserName = async() => {
        if (user && userName !== '' && user.displayName !== userName) {
            await updateProfile(user, { displayName: userName })
            toast({
                title: 'Имя пользователя обновлено!',
                description: 'Новое имя отобразится при переходе между страницами',
            })
        }
    }
    useDebounceEffect(() => {
        updateUserName()
    }, [userName, setUserName], { wait: 2000 })
    return (
        <div className="flex items-start w-full h-full gap-4">
            <div className="flex flex-col w-3/4 h-full">
                <div className="flex flex-col w-full gap-2 h-fit">
                    <h2 className='text-2xl font-bold'>Редактирование данных</h2>
                    <span className='text-xs text-neutral-400'>Здесь вы можете изменить имя пользователя, и фото профиля</span>
                </div>
                <div className="w-full py-2">
                    <Input disabled placeholder='Почта' />
                </div>
                <div className="w-full py-2">
                    <Input placeholder='Имя пользователя' onChange={e => setUserName(e.target.value)} value={userName} />
                </div>
                </div>
            <div className="flex flex-col w-1/4 h-full gap-2">
                <div className="mx-auto">
                    <Avatar src={user?.photoURL || null} fallbackImage={fallbackImg} size={128} />
                </div>
                <Input id="picture" type="file" multiple={false} onChange={e => {
                    const selectedFile = e.target.files ? e.target.files[0] : null
                    if (selectedFile) uploadImage(selectedFile)
                }} />
            </div>
        </div>
    )
}

export default PersonalEditPage