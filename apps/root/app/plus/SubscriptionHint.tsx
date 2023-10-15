'use client'
import { useAppSelector } from '@/components/entities/store/store'
import { Button } from '@ui/components/ui/button'
import Link from 'next/link'

const SubscriptionHint = () => {
    const isSub = useAppSelector(state => state.user.isSubscriber)
    return (
        <div className="flex items-center justify-between w-full px-4 pl-5 h-fit">
            {
                isSub
                ? <span className='text-sm text-neutral-400'>Вы в плюсе</span>
                : <span className='text-sm text-neutral-200'>Вы не в плюсе</span>
            }
            <Link href='/plus/activate'>
                <Button size='sm'>Есть промокод?</Button>
            </Link>
        </div>
    )
}

export default SubscriptionHint