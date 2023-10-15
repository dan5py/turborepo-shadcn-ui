import AdviceCard from '@ui/components/shared/AdviceCard'
import Image from 'next/image'
import bum from '@ui/assets/bum.svg'
import ambient from '@ui/assets/plus/shot_preview.png'
import reactions from '@ui/assets/plus/reactions.jpg'
import SubscriptionHint from './SubscriptionHint'

const MemberShip = () => {
    return (
        <div className='flex flex-col w-full max-w-5xl gap-4 mx-auto'>
            <SubscriptionHint />
            <div className="flex flex-col w-full gap-2 p-5 overflow-hidden h-fit">
                <div className="flex items-center w-full gap-2 h-fit">
                    <Image src={bum} width={24} height={24} alt='bum-logo' />
                    <span className="text-2xl font-semibold text-neutral-300">bum</span>
                </div>
                <div className="flex items-center justify-start w-full h-full gap-2 overflow-x-auto">
                <AdviceCard title={<span className="text-xl font-medium text-neutral-200">Ambient подсветка для работ</span>} 
                cover={<Image src={ambient} fill className="object-cover" alt='ambient-preview' />} />
                <AdviceCard title={<span className="text-xl font-medium text-neutral-200">Реакции под комментариями</span>} cover={
                    <Image src={reactions} fill className="object-cover" alt='reactions-preview' />
                } />
                <AdviceCard title={<span className="text-xl font-medium text-neutral-200">В два раза больше медиа блоков</span>} content={<span className="font-bold text-9xl">x2</span>} />
                </div>
            </div>
        </div>
    )
}

export default MemberShip