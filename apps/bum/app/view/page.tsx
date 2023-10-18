import React from 'react'
import { getShot } from '../fetchers'
import Image from 'next/image'
import { cdn } from '@ui/helpers/cdn'
import TextBlock from './TextBlock'
import Ambient from './Ambient'
import { Button } from '@ui/components/ui/button'
import { BiLeftArrowAlt } from 'react-icons/bi'
import Link from 'next/link'

type Props = {
    searchParams: {
        s: string | undefined
    }
}
const ViewPage = async({ searchParams }: Props) => {
    const shotId = searchParams.s
    const shotData = shotId ? getShot(shotId) : null
    const [shot] = await Promise.all([shotData])
    const stableLink = shot.rootBlock.link
    if (!searchParams.s || !shotId || !shot) return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            <span className='text-2xl font-semibold text-neutral-300'>Такой работы нет</span>
        </div>
    )
    return (
        <div className='flex flex-col w-full min-h-screen'>
            <div className="flex flex-col w-full max-w-sm mx-auto py-14 gap-14 md:max-w-2xl lg:max-w-4xl h-fit shrink-0">
                <div className="flex items-center justify-center w-full h-fit">
                    <h1 className='text-3xl font-bold text-neutral-300'>{shot.title}</h1>
                </div>
                <div className="w-full relative aspect-[4/3] rounded-xl border border-neutral-800">
                    <Ambient link={stableLink} />
                    {/* {
                        (stableLink).endsWith('.mp4')
                        ? <video autoPlay muted loop className="object-cover w-full h-full rounded-2xl">
                            <source src={cdn(stableLink)} />
                        </video>
                        : <Image src={cdn(stableLink)} fill className="object-cover rounded-2xl" alt='img' />
                    } */}
                </div>
                <div className="flex flex-col w-full gap-12 px-6 mt-20">
                    <div className="w-full border rounded-full border-neutral-700">
                        <Link href='/shots'>
                            <Button size='icon' className='rounded-full' variant='outline'><BiLeftArrowAlt size={15} /></Button>
                        </Link>
                    </div>
                    {
                        shot.blocks.map((block, i) => {
                            if (block.type === 'text') return <TextBlock key={i} {...block} />
                            if (block.type === 'image' || block.type === 'video') {
                                const isVideo = (block.link).endsWith('.mp4')
                                if (isVideo) return (
                                    <div key={i} className="relative w-full border h-fit rounded-xl border-neutral-800">
                                        <video key={i} autoPlay muted loop className="object-contain w-full h-full rounded-xl">
                                            <source src={cdn(block.link)} />
                                        </video>
                                    </div>
                                )
                                return (
                                    <div key={i} className="relative w-full border h-fit rounded-xl border-neutral-800">
                                        <Image src={cdn(block.link)} fill className="!relative object-contain rounded-xl" alt='img' />
                                    </div>
                                )
                            }
                            return null
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewPage