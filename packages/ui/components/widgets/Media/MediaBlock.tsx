import LoadedImage from '@ui/components/shared/LoadedImage'
import LoadedVideo from '@ui/components/shared/LoadedVideo'
import { cdn } from '@ui/helpers/cdn'
import { memo } from 'react'
type MediaBlockProps = {
    link: string
    quality?: number
    object?: 'cover' | 'contain' 
    autoPlay?: boolean
    asBlob?: boolean
    forcedType?: 'image' | 'video'
}
const MediaBlock = ({ forcedType, asBlob=false, link, quality=75, object='contain', autoPlay=false }: MediaBlockProps) => {
    const type = forcedType ? forcedType : link.endsWith('.mp4') ? 'video' : 'image'
    const preparedLink = asBlob ? link : cdn(link)
    if (process.env.NODE_ENV === 'development') {
        return (
            <div className="w-full h-full rounded-xl bg-neutral-900" />
        )
    }
    if (link !== '') {
        if (type === "image") {
            return <LoadedImage link={preparedLink} object={object} quality={quality} />
        } else return <LoadedVideo link={preparedLink} autoPlay={autoPlay} />
    }
    return null
}

export default memo(MediaBlock)