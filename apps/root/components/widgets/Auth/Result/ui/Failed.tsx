'use client'
import { setEmail, setPassword } from '@/components/entities/auth/email&password'
import { setStep } from '@/components/entities/auth/steps'
import { setUserInProcess } from '@/components/entities/auth/userInProcess'
import { useAppDispatch } from '@/components/entities/store/store'
import { Button } from '@ui/components/ui/button'
import { auth } from '@ui/utils/app'
import React from 'react'

const Failed = () => {
    const dispatch = useAppDispatch()
    const signOut = () => {
        dispatch(setUserInProcess(null))
        dispatch(setEmail(''))
        dispatch(setPassword(''))
        auth.signOut()
        dispatch(setStep('email'))
    }
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <Button onClick={signOut}>Попробовать ещё раз</Button>
        </div>
    )
}

export default Failed