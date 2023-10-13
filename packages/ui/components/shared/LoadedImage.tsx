import Image from 'next/image'
import { Suspense } from 'react';

export type LoadedImageProps = {
    link: string
    quality?: number
    object?: 'cover' | 'contain' 
}
const LoadedImage = ({ link, quality=75, object='contain' }: LoadedImageProps) => {
    return (
        <Suspense fallback={<div className='aspect-[4/3] bg-neutral-900 animate-pulse rounded-xl' />}>
            <Image priority fill src={link} unoptimized={link.includes('.gif') ? true : false}
            className={`!relative ${object === 'contain' ? 'object-contain w-full !h-fit' : 'h-full aspect-[4/3] object-cover'} rounded-xl`} 
            alt='block-image' quality={quality} placeholder='blur' blurDataURL={link} />
        </Suspense>
    )
}

export default LoadedImage