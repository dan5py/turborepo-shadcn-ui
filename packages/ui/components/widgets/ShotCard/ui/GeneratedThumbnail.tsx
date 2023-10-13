'use client'
import LoadedVideo from '@ui/components/shared/LoadedVideo';
import { cdn } from '@ui/helpers/cdn';
import { useTimeout } from 'ahooks';
import { useRef, ElementRef, useState, useLayoutEffect, memo } from 'react';

interface GenerateThumbnailProps {
    thumbnailLink: string | null
    videoLink: string
}

const GeneratedThumbnail = ({ thumbnailLink, videoLink }: GenerateThumbnailProps) => {
    const videoRef = useRef<ElementRef<'video'>>(null);
    const canvasRef = useRef<ElementRef<'canvas'>>(null);
    const [playVideo, setPlayVideo] = useState<boolean>(false)
    const [delay, setDelay] = useState<number | undefined>(undefined)
    const clear = useTimeout(() => {
        setPlayVideo(true)
    }, delay);
    const paintThumbnail = () => {
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext("2d", { alpha: false });
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        }
    }
    useLayoutEffect(() => {
        if ((videoRef.current || canvasRef.current) && !playVideo) {
            if (videoRef.current) {
                videoRef.current.addEventListener('load', paintThumbnail)
                videoRef.current.addEventListener('canplaythrough', paintThumbnail)
                videoRef.current.addEventListener('loadeddata', paintThumbnail)
                videoRef.current.addEventListener('loadedmetadata', paintThumbnail)
            }
        } 
    },[videoRef, canvasRef, playVideo])
    if (process.env.NODE_ENV === 'development') return (
        <div className="w-full h-full rounded-xl aspect-[4/3] bg-neutral-900" />
    )
    if (playVideo) return <div onMouseLeave={() => {setPlayVideo(false); setDelay(undefined)}}><LoadedVideo link={cdn(videoLink)} autoPlay /></div>
    return (
        <>
            { delay !== undefined && <span onMouseEnter={() => setDelay(2000)}
            className='absolute px-3 py-1 text-xs rounded-md bottom-14 right-2 bg-neutral-900 text-neutral-400'>Не убирайте указатель, предпросмотр начинается</span> }
            <video ref={videoRef} preload='metadata' loop muted className='w-full h-full hidden aspect-[4/3] rounded-xl'>
                <source src={cdn(thumbnailLink ? thumbnailLink : videoLink) + '#t=0.5'} />
            </video>
            <canvas ref={canvasRef} onMouseEnter={() => setDelay(2000)} onMouseLeave={() => { clear(); setDelay(undefined)}}
            className='w-full h-full z-10 aspect-[4/3] rounded-xl' />
        </>
    );
};

export default memo(GeneratedThumbnail);

