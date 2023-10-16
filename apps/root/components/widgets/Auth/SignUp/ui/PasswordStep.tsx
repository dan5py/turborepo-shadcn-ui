import { setStep } from '@/components/entities/auth/steps'
import { setPassword } from '@/components/entities/auth/email&password'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import React from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Session } from '@ui/types'
import { setSession } from '@ui/components/entities/session/session'
import { Button } from '@ui/components/ui/button'
import { auth } from '@ui/utils/app'
import { Input } from '@ui/components/ui/input'
import { uidUnionChecker } from '@ui/helpers/session'
import { BiLoaderAlt } from 'react-icons/bi'
const PasswordStep = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
    const form = useAppSelector(state => state.form)
    const disabled = form.password.length <= 5
    const dispatch = useAppDispatch()
    const session = useAppSelector(state => state.watcher.session)
    const signUp = async() => {
        if (form.email !== '' && !disabled) {
            const res = await createUserWithEmailAndPassword(form.email, form.password)
            if (res) {
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
    return (
        <div className='flex flex-col justify-between w-full h-full'>
            <Input placeholder='Пароль' onKeyUp={e => e.key === 'Enter' && signUp()}
            value={form.password} onChange={e => dispatch(setPassword(e.target.value))} />
            <div className="w-full"><Button onClick={signUp} disabled={disabled} className='w-full'>
            { loading && <BiLoaderAlt className='animate-spin' /> }
            Продолжить</Button></div>
        </div>
    )
}

export default PasswordStep