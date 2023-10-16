import { setStep } from '@/components/entities/auth/steps'
import { setPassword } from '@/components/entities/auth/email&password'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Session } from '@ui/types'
import { setSession } from '@ui/components/entities/session/session'
import { Button } from '@ui/components/ui/button'
import { auth } from '@ui/utils/app'
import { Input } from '@ui/components/ui/input'
import { uidUnionChecker } from '@ui/helpers/session'
import { BiLoaderAlt } from 'react-icons/bi'
import { useDebounceEffect } from 'ahooks'
import { checkNickname, createNick } from '@ui/helpers/nickname'

const PasswordStep = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
    const form = useAppSelector(state => state.form)
    const [nickname, setNickname] = useState<string>('')
    const dispatch = useAppDispatch()
    const session = useAppSelector(state => state.watcher.session)
    const [validationLoading, setValidationLoading] = useState<boolean>(false)
    const [isNotAvailable, setIsNotAvailable] = useState<boolean>(false)
    const [isValid, setIsValid] = useState<boolean>(false)
    const signUp = async() => {
        if (form.email !== '' && !disabled) {
            const res = await createUserWithEmailAndPassword(form.email, form.password)
            if (res) {
                await createNick(nickname, res.user.uid)
                const updatedSession: Session = {
                    ...session,
                    uid: res.user.uid,
                    uids: uidUnionChecker(res.user.uid, session.uids)
                }
                dispatch(setSession(updatedSession))
                dispatch(setStep('success'))
            } else {
                dispatch(setStep('failed'))
            }
        }
    }
    const disabled = isNotAvailable || !isValid || form.password.length <= 5
    useDebounceEffect(() => {
        setValidationLoading(true)
        const regEx = /^[\w+]+$/
        const validNickname = regEx.test(nickname)
        setIsValid(validNickname)
        if (validNickname) {
            checkNickname(nickname)
            .then(res => setIsNotAvailable(res))
            .finally(() => setValidationLoading(false))
        } else setValidationLoading(false)
    },[nickname], { wait: 1000 })
    return (
        <div className='flex flex-col justify-between w-full h-full'>
            <div className="flex flex-col w-full gap-2 h-fit">
                <Input placeholder='Какой хотите ник?' onKeyUp={e => e.key === 'Enter'}
                value={nickname} onChange={e => setNickname(e.target.value)} />
                <span className='text-xs text-neutral-300'>
                { validationLoading ? 'Проверяем...' :nickname.length !== 0 ? !isValid ? 'Не валидный ник' : isNotAvailable ? 'Ник уже занят' : 'Ник доступен' : 'Только латинские буквы и цифры' }
                </span>
                <Input placeholder='Пароль' type='password' onKeyUp={e => e.key === 'Enter' && signUp()}
                value={form.password} onChange={e => dispatch(setPassword(e.target.value))} />
            </div>
            <div className="w-full"><Button onClick={signUp} disabled={disabled} className='w-full'>
            { loading && <BiLoaderAlt className='animate-spin' /> }
            Продолжить</Button></div>
        </div>
    )
}

export default PasswordStep