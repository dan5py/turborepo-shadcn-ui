import { DocShotData } from '@ui/types'
import dynamic from 'next/dynamic'
import ShotWrapper from './ui/ShotWrapper'
import GeneratedThumbnail from './ui/GeneratedThumbnail'
import MediaBlock from '../Media/MediaBlock'
import { Suspense, memo } from 'react'
import { toShot } from '@ui/helpers/toShot'

const Link = dynamic(() => import('next/link')) 

type Props = {
    shot: DocShotData
}
const ShotCard = ({ shot }: Props) => {
    const stableLink = shot.thumbnail ? shot.thumbnail.link : shot.rootBlock.link
    const isVideo = stableLink.endsWith('.mp4')
    if (shot.isDraft) return (
        <ShotWrapper shot={shot}>
            {
                isVideo 
                ? <GeneratedThumbnail thumbnailLink={shot.thumbnail?.link as string | null} videoLink={shot.rootBlock.link} />
                : <MediaBlock link={stableLink} quality={75} object='cover' autoPlay={false} />
            }
        </ShotWrapper>
    )
    return (
        <ShotWrapper shot={shot}>
            <Suspense fallback={<div className='w-full h-full rounded-xl bg-neutral-900 animate-pulse'/>}>
                <Link scroll={false} href={toShot(shot.doc_id)} className='relative w-full aspect-[4/3] h-full'>
                    {
                        isVideo 
                        ? <GeneratedThumbnail thumbnailLink={shot.thumbnail?.link as string | null} videoLink={shot.rootBlock.link} />
                        : <MediaBlock link={stableLink} quality={75} object='cover' autoPlay={false} />
                    }
                </Link>
            </Suspense>
        </ShotWrapper>
    )
}

export default memo(ShotCard)