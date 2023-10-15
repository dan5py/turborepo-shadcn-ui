'use client'
import { activateCodeAndDelete, checkCode } from '@ui/helpers/plus'
import { Button } from '@ui/components/ui/button'
import { Input } from '@ui/components/ui/input'
import { PromoCodeWithId } from '@ui/types'
import { auth } from '@ui/utils/app'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLoaderAlt } from 'react-icons/bi'

const PromoCodeForm = () => {
    const router = useRouter()
    const [user] = useAuthState(auth)
    const [code, setCode] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const getCheckCode = async() => {
        if (user) {

            setLoading(true)
            const existedCode: PromoCodeWithId | null = await checkCode(code)
            if (existedCode) {
                const res = await activateCodeAndDelete(existedCode.code, user.uid)
                console.log(res)
                if (res) router.push('/plus/activate/success')
            }
            setLoading(false)
        }
    }
    return (
        <div className="flex items-center w-full gap-4 h-fit">
            <Input value={code} onChange={e => setCode(e.target.value)} placeholder='Введите ваш промокод здесь...' />
            <Button disabled={loading || code.length < 6} onClick={getCheckCode}>{loading && <BiLoaderAlt className='mr-2 animate-spin' size={19} />}Активировать</Button>
        </div>
    )
}

export default PromoCodeForm