import { setPassword } from '@/components/entities/auth/email&password'
import { setStep } from '@/components/entities/auth/steps'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { setSession } from '@ui/components/entities/session/session'
import { Button } from '@ui/components/ui/button'
import { Input } from '@ui/components/ui/input'
import { uidUnionChecker } from '@ui/helpers/session'
import { Session } from '@ui/types'
import { auth } from '@ui/utils/app'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { BiLoaderAlt } from 'react-icons/bi'
const PasswordStep = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const form = useAppSelector(state => state.form)
    const disabled = form.password.length <= 5
    const dispatch = useAppDispatch()
    const session = useAppSelector(state => state.watcher.session)
    const signIn = async() => {
        if (form.email !== '' && !disabled) {
            const res = await signInWithEmailAndPassword(form.email, form.password)
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
            <Input type='password' placeholder='Пароль' onKeyUp={e => e.key === 'Enter' && signIn()}
            value={form.password} onChange={e => dispatch(setPassword(e.target.value))} />
            <div className="w-full"><Button onClick={signIn} disabled={disabled} className='w-full'>
                { loading && <BiLoaderAlt className='animate-spin' /> }
                Продолжить
            </Button></div>
        </div>
    )
}

export default PasswordStep