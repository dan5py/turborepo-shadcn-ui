'use client'
import { useAppSelector } from '@/components/entities/store/store'
import Failed from '@/components/widgets/Auth/Result/ui/Failed'
import Success from '@/components/widgets/Auth/Result/ui/Success'
import EmailStep from '@/components/widgets/Auth/SignIn/ui/EmailStep'
import PasswordStep from '@/components/widgets/Auth/SignIn/ui/PasswordStep'
import StatusBlock from '@/components/widgets/Auth/StatusBlock'


const SignUpPage = () => {
    const form = useAppSelector(state => state.form)
    const step = useAppSelector(state => state.steps.step)
    return (
        <>
        <StatusBlock />
        {
            step === 'email' 
            ? <EmailStep />
            : step === 'password'
            ? <PasswordStep />
            : step === 'success'
            ? <Success />
            : <Failed />
        }
    </>
    )
}

export default SignUpPage