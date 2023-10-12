import Image from 'next/image'
import { v4 } from 'uuid'
import SubLabel from './SubLabel'

type Props = {
    src: string | null
    size: number
    isSub?: boolean
    direction?: 'left' | 'right'
    noLabel?: boolean
}
const Avatar = ({ size, src, isSub, direction='left', noLabel=false }: Props) => {
    if (!isSub) {
        return <Image src={src ? src : '../../assets/EmptyUser.svg'} className="rounded-full shrink-0" width={size} height={size} alt={v4()} />
    }
    return (
        <div className={`flex items-center ${direction === 'left' ? 'flex-row' : 'flex-row-reverse'} h-full shrink-0 gap-2 w-fit`}>
            { isSub && !noLabel && <SubLabel /> }
            <Image src={src ? src : '/EmptyUser.svg'} className={`rounded-full shrink-0 ${isSub && 'border-2 border-white'}`} width={size} height={size} alt={v4()} />
        </div>
    )
}

export default Avatar