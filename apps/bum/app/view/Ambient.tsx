'use client'
import { cdn } from '@ui/helpers/cdn';
import { MotionConfig, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ElementRef, LegacyRef, MutableRefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { useInterval } from 'ahooks';

type Props = {
    link: string
}
const Ambient = ({ link }: Props) => {
    const isVideo = link.endsWith('.mp4')
    const mediaBlock = useRef<ElementRef<'video' | 'img'>>(null)
    const canvas = useRef<ElementRef<'canvas'>>(null);
    const isInView = useInView(mediaBlock)
    const FRAMERATE = 24;
    const [run, setRun] = useState<boolean>(false);
    
    const repaintAmbientLight = () => {
        if (canvas.current) {
            const context = canvas.current.getContext("2d");
            if (context && mediaBlock.current) {
                context.drawImage(mediaBlock.current, 0, 0, canvas.current.width, canvas.current.height);
            }
        }
    }
    const startAmbientLightRepaint = useCallback(() => {
        if (mediaBlock.current && canvas.current) {
            setRun(true)
        }
    }, [mediaBlock, canvas]);

    const stopAmbientLightRepaint = useInterval(() => {
        repaintAmbientLight()
    }, run ? 1000 / FRAMERATE : undefined);
    useLayoutEffect(() => {
        const block = mediaBlock.current
        if (block) {
            if (isVideo) {
                const video = block as HTMLVideoElement
                const handlePlay = () => startAmbientLightRepaint();
                const handlePause = () => {
                    stopAmbientLightRepaint();
                    setRun(false);
                };
                const handleEnded = handlePause;
                const handleSeeked = () => repaintAmbientLight();
                const handleLoad = handleSeeked;
                if (isInView) {
                    video.addEventListener('loadeddata', () => {
                        video.play();
                    });
                    video.play();
                    video.addEventListener("play", handlePlay);
                    video.addEventListener("pause", handlePause);
                    video.addEventListener("ended", handleEnded);
                    video.addEventListener("seeked", handleSeeked);
                    video.addEventListener("load", handleLoad);
                    
                    return () => {
                        video.removeEventListener("play", handlePlay);
                        video.removeEventListener("pause", handlePause);
                        video.removeEventListener("ended", handleEnded);
                        video.removeEventListener("seeked", handleSeeked);
                        video.removeEventListener("load", handleLoad);
                    };
                } else {
                    video.pause()
                    handlePause()
                }
            } else {
                repaintAmbientLight()
                block.addEventListener("load", () => repaintAmbientLight());
            }
        }
    },[mediaBlock.current])
    useLayoutEffect(() => {
        if (mediaBlock.current) {
            mediaBlock.current.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }
    },[])
    return (
        <div className='relative w-full aspect-[4/3] flex items-center justify-center'>
            <div className={'absolute flex items-center justify-center light_wrapper aspect-[16/12] blur-[125px]'}>
                <MotionConfig transition={{ type: "spring", duration: 3000 }}>
                    <motion.canvas initial={{ opacity: 0 }} animate={{ opacity: .65 }} ref={canvas} id="ambiLightv2" className='aspect-[16/12]' onLoad={() => repaintAmbientLight()} />
                </MotionConfig>
            </div>
            {
                isVideo
                ? <video ref={mediaBlock as LegacyRef<HTMLVideoElement>} autoPlay muted loop className="z-10 object-cover w-full h-full rounded-2xl">
                    <source src={cdn(link)} />
                </video>
                : <Image ref={mediaBlock as MutableRefObject<HTMLImageElement>} src={cdn(link)} fill className="z-10 object-cover rounded-2xl" alt='img' />
            }
        </div>
    )
}

export default Ambient