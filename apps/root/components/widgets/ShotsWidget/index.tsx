import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@ui/components/ui/button';
import { host } from '@ui/const/host'
import { DocShotData } from '@ui/types/index'
import ShotCard from '@ui/components/widgets/ShotCard'
import bum from '@ui/assets/bum.svg'

const getPopularChunk = async(): Promise<DocShotData[]> => {
    try { 
      const chunkLink = `${host}/shots/all/popular?skip=0`
      const res = await fetch(chunkLink, {
        next: { revalidate: 7200 }
      })
      if (res.ok) return await res.json()
      return []
    } catch(e) {
      return []
    }
  }
type Props = {
    hideNav?: boolean
}
const ShotsWidget = async({ hideNav=false }: Props) => {
    const shots = await getPopularChunk()
    return (
        <div className='flex flex-col w-full gap-4 px-4 h-fit'>
            {
                hideNav === false &&
                <div className="flex items-center justify-center w-full gap-4 h-fit">
                    <div className="flex items-center w-full gap-2 h-fit">
                        <Image src={bum} width={36} height={36} alt='bum-service-logo' />
                        {/* <span className="text-2xl font-bold">Dey</span> */}
                    </div>
                    <Link href='https://bum.darkmaterial.space'><Button variant='secondary'>Больше</Button></Link>
                </div>
            }
            <ol className="grid w-full gap-8 shrink-0 h-fit shots_grid">
                {
                    shots &&
                    shots.filter((_, index) => index <= 14).map(shot => 
                        <ShotCard key={shot.doc_id} shot={shot} />
                    )
                }
            </ol>
        </div>
    )
}

export default ShotsWidget