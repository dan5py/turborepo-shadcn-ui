'use client'
import { Button } from '@ui/components/ui/button'
import { cdn } from '@ui/helpers/cdn'
import { DocShotData } from '@ui/types'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, memo, useState } from 'react'
import { BiHeart, BiLoaderAlt, BiShow } from 'react-icons/bi'

type Props = {
    initialChunk: DocShotData[] | null
    chunks: string[]
    lastChunk: number
}
const fetchChunk = async(link: string) => {
    try {
        const res = await fetch(link, {
            next: { revalidate: 120 }
        })
        if (res.ok) {
            const data: DocShotData[] = await res.json()
            return data
        } else {
            return null
        }
    } catch(e) {
        return null
    }
}
const ChunkController = ({ chunks, initialChunk, lastChunk }: Props) => {
    const [items, setItems] = useState<DocShotData[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const loadChunk = async() => {
        setLoading(true)
        const chunkLink = chunks[currentIndex]
        if (chunkLink) {
            const fetchedChunk = await fetchChunk(chunkLink)
            setLoading(false)
            setCurrentIndex(currentIndex + 1)
            if (fetchedChunk) setItems([ ...items, ...fetchedChunk ])
        } else setLoading(false)
    }
    return (
        <>
            { initialChunk && initialChunk.map(item => {
                const stableLink = item.thumbnail ? item.thumbnail.link : item.rootBlock.link
                    return (
                        <Link href={'/view' + '?s=' + item.doc_id}
                        key={item.doc_id} className="relative w-full aspect-[4/3] rounded-2xl border border-neutral-700">

                            <div className="absolute bottom-0 left-0 z-10 flex items-center justify-between w-full gap-2 p-4 bg-gradient-to-t from-black to-transparent rounded-b-2xl h-fit">
                                <span className='font-medium text-neutral-200 line-clamp-1'>{item.title}</span>
                                <div className="flex items-center gap-2 h-fit w-fit">
                                    <span className='inline-flex items-center gap-1 text-xs text-neutral-200'>
                                        <BiHeart size={15} />
                                        {item.likes.length}
                                    </span>
                                    <span className='inline-flex items-center gap-1 text-xs text-neutral-200'>
                                        <BiShow size={15} />
                                        {item.views.length}
                                    </span>
                                </div>
                            </div>
                            <Suspense fallback={<div className='w-full h-full rounded-2xl bg-neutral-950 animate-pulse' />}>
                            {
                                process.env.NODE_ENV === 'development' 
                                ? null
                                : stableLink.endsWith('.mp4')
                                ? <video className="object-cover w-full h-full rounded-2xl">
                                        <source src={cdn(stableLink)} />
                                </video>
                                : <Image src={cdn(stableLink)} fill className="object-cover rounded-2xl" alt='img' />
                            }
                            </Suspense>
                        </Link>
                    )
                }) 
            }
            { items.map(item => {
                const stableLink = item.thumbnail ? item.thumbnail.link : item.rootBlock.link
                    return (
                        <Link href={'/view' + '?s=' + item.doc_id}
                        key={item.doc_id} className="relative w-full aspect-[4/3] rounded-2xl border border-neutral-700">

                            {
                                process.env.NODE_ENV === 'development' 
                                ? null
                                : stableLink.endsWith('.mp4')
                                ?
                                    <video className="object-cover w-full h-full rounded-2xl">
                                        <source src={cdn(stableLink)} />
                                    </video>
                                : <Image src={cdn(stableLink)} fill className="object-cover rounded-2xl" alt='img' />
                            }
                        </Link>
                    )
                }) 
            }
            <div className="flex items-center justify-center w-full col-span-full h-fit">
                {
                    chunks.length === 0
                    ? null
                    : (lastChunk - 1) === currentIndex
                    ? <span className='text-sm text-neutral-400'>Вы дошли до конца списка</span>
                    : <Button disabled={((lastChunk - 1) === currentIndex) || loading} onClick={loadChunk}>
                        { loading && <BiLoaderAlt size={16} className='mr-2 animate-spin' /> }
                        { loading ? 'Подгружаем' : 'Загрузить ещё' }
                    </Button>
                }
            </div>
        </>
        
    )
}

export default memo(ChunkController)