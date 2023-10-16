'use client'
import { setStep } from '@/components/entities/auth/steps'
import { setEmail } from '@/components/entities/auth/email&password'
import { setUserInProcess } from '@/components/entities/auth/userInProcess'
import { useAppSelector, useAppDispatch } from '@/components/entities/store/store'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { ShortUserData } from '@ui/types'
import { host } from '@ui/const/host'
import { Button } from '@ui/components/ui/button'
import { Input } from '@ui/components/ui/input'
import { BiLoaderAlt } from 'react-icons/bi'

const EmailStep = () => {
    const params = useSearchParams()
    const form = useAppSelector(state => state.form)
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState<boolean>(false)
    const conditionForDisabled = form.email.length < 9 && !form.email.includes('@')
    const checkUserExist = async() => {
        setLoading(true)
        try {
            const res = await fetch(`${host}/users/shortByEmail?email=${form.email}`, { method: 'GET', cache: 'no-cache' })
            if (res.ok) {
                const user: { short: ShortUserData } | null = await res.json()
                setLoading(false)
                if (!user) {
                    dispatch(setUserInProcess({ email: form.email }))
                    dispatch(setStep('password'))
                }
            } else {
                setLoading(false)
                console.log('not ok')
            } 
        } catch(e) {
            console.log(e)
        }

    }
    return (
        <div className='flex flex-col justify-between w-full h-full'>
            <div className="w-full h-full">
                <Input onChange={e => dispatch(setEmail(e.target.value))} 
                onKeyUp={e => e.key === 'Enter' && checkUserExist()} value={form.email} placeholder='Почта' />
            </div>
            <div className="flex flex-col w-full gap-2 mt-auto h-fit">
                <div className="flex items-center justify-center w-full gap-2 h-fit">
                    <Link href={`/auth/signin?${params.toString()}`} className="text-xs text-neutral-400">Уже есть аккаунт?</Link>
                </div>
                <div className="w-full h-fit">
                    <Button className='w-full' onClick={checkUserExist} disabled={conditionForDisabled}>
                        { loading && <BiLoaderAlt className='animate-spin' /> }
                        Продолжить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EmailStep