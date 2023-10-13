import { DocShotData } from '@ui/types/index'
import { Suspense } from 'react'
import { BiPlay } from 'react-icons/bi'
import ShotInfo from './ShotInfo'


type Props = {
    children: React.ReactNode
    shot: DocShotData
}
const ShotWrapper = ({ children, shot }: Props) => {
    const stableLink = shot.thumbnail ? shot.thumbnail.link : shot.rootBlock.link
    const isVideo = stableLink.endsWith('.mp4')
    return (
        <div className="relative aspect-[4/3] w-full h-fit rounded-xl shrink-0 group transition-transform hover:scale-105">
            { isVideo && <BiPlay className='absolute z-10 top-3 right-3 group-hover:hidden' size={25} /> }
            <Suspense fallback={<div className='w-full h-full rounded-xl animate-pulse bg-neutral-900'/>}>
                {children}
            </Suspense>
            <Suspense fallback={<div className='absolute bottom-0 left-0 w-full h-8 rounded-xl bg-neutral-800'/>}>
            {
                !shot.isDraft &&
                // @ts-ignore
                <ShotInfo shot={shot} />
            }
            </Suspense>
        </div>
    )
}

export default ShotWrapper