import { DocShotData } from '@ui/types'
import { BiHeart, BiSolidMessageRoundedDots, BiSolidShow } from 'react-icons/bi'

type Props = {
    shot: DocShotData
}
const ShotActions = ({ shot }: Props) => {
    return (
        <>
            <div className="flex items-center gap-1 w-fit h-fit">
                <BiHeart />
                <span className='text-xs text-neutral-300'>{shot.likes.length}</span>
            </div>
            { 
                shot.needFeedback && 
                <div className="flex items-center gap-1 w-fit h-fit">
                    <BiSolidMessageRoundedDots />
                    <span className='text-xs text-neutral-300'>{shot.comments.length}</span>
                </div>
            }
            <div className="flex items-center gap-1 w-fit h-fit">
                <BiSolidShow />
                <span className='text-xs text-neutral-300'>{shot.views.length}</span>
            </div>
        </>
    )
}

export default ShotActions