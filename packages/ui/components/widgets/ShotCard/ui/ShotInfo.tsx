import ShotActions from './ShotActions'
import Link from 'next/link'
import { host } from '@ui/const/host'
import Avatar from '@ui/components/shared/Avatar'
import { DocShotData, ShortUserData } from '@ui/types'

type Props = {
    shot: DocShotData
}
const getShortData = async(userId: string) => {
    try {
        const userRes = await fetch(`${host}/users/shortData?userId=${userId}`, { method: 'GET' })
        const user: { short: ShortUserData } | null = await userRes.json()
        return user ? user.short : null
    } catch(e) {
        console.log(e)
        return null
    }
}
const ShotInfo = async({ shot }: Props) => {
    const user = await getShortData(shot.authorId)
    const isSub = user?.isSubscriber || false
    const isVideo = (shot.thumbnail ? shot.thumbnail.link : shot.rootBlock.link).includes('.mp4')
    return (
        <div className={`absolute bottom-0 left-0 z-20 flex items-center justify-between w-full gap-2 px-4 py-2 ${isVideo ? 'group-hover:opacity-0 hover:!opacity-100' : ''} rounded-b-xl h-fit bg-gradient-to-t from-black to-transparent`}>
            <h2 className='text-base font-medium text-neutral-200 line-clamp-1'>{shot.title}</h2>
            <div className="flex items-center gap-2 p-1 pl-3 bg-black rounded-full shrink-0 w-fit h-fit">
                <ShotActions shot={shot} />
                <Link href={`/${shot.authorId}`}>
                    <Avatar src={user ? user.photoUrl : null} size={26} noLabel isSub={isSub} direction='left' />
                </Link>
            </div>
        </div>
    )
}

export default ShotInfo