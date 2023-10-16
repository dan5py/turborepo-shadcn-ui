'use client'
import { setStep } from '@/components/entities/auth/steps'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { uploadSession } from '@ui/helpers/session'
import { generateSidToken, verifyToken } from '@ui/helpers/token'
import { auth } from '@ui/utils/app'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useLayoutEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLoaderAlt, BiSolidCheckCircle } from 'react-icons/bi'
const Success = () => {
    const session = useAppSelector(state => state.watcher.session)
    const [user] = useAuthState(auth)
    const params = useSearchParams()
    const back_url = params.get('back_url')
    const dispatch = useAppDispatch()
    const router = useRouter()
    const startRedirect = () => new Promise(async(res, ref) => {
        const sidToken = generateSidToken(session)
        if (back_url) {
            if (sidToken && session.uid) {
                await uploadSession(session)
                const url = back_url ? `${back_url}?token=${sidToken}` : `https://darkmaterial.space?token=${sidToken}`
                const token = await verifyToken(sidToken) as { sid: string } | null
                if (token && token.sid) res(url)
            }
        } else {
            if (sidToken && session.uid) {
                await uploadSession(session)
                const token = await verifyToken(sidToken) as { sid: string } | null
                if (token && token.sid) res('/')
            }
        }
    })
    useLayoutEffect(() => {
        startRedirect()
        .then((url: string | undefined) => url ? router.push(url) : null)
    },[])
    useLayoutEffect(() => {
        if (!user) dispatch(setStep('email'))
    },[user])
    return (
        <div className='flex flex-col justify-between w-full h-full'>
            <div className="flex flex-col items-center justify-center w-full h-full gap-3">
                <div className="relative flex items-center justify-center border rounded-full w-fit h-fit bg-neutral-900 border-neutral-700">
                    <BiLoaderAlt className='absolute text-green-500 animate-spin' size={76} />
                    <BiSolidCheckCircle size={64} className='text-green-500' />
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <span className='text-sm text-center text-neutral-300'>Ждите, мы вас переправим</span>
            </div>
        </div>
    )
}

export default Success