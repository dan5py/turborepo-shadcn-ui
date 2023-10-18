import { BiVideo, BiImage, BiPlay } from "react-icons/bi"
import { getAllShot } from "../fetchers"
import { Suspense } from 'react'
import Image from "next/image"
import { cdn } from "@ui/helpers/cdn"
import { Input } from "@ui/components/ui/input"

export default async function ShotsPage() {
    const allShots = await getAllShot()
    return (
      <div className="flex flex-col w-full h-full gap-12">
        <div className="flex flex-col items-center justify-center w-full h-96">
          <div className="w-full max-w-lg">
            <Input placeholder="Поиск" className="text-center" />
          </div>
        </div>
        <Suspense>
          <div className="flex flex-col w-full gap-2 h-fit">
            <div className="flex items-center w-full px-4 h-fit">
              <div className="w-24 border h-9 rounded-xl border-neutral-700"></div>
            </div>
            <main className="grid w-full px-4 py-4 h-fit shots_grid gap-9">
              {
                allShots.map(shot => {
                  const stableLink = shot.thumbnail ? shot.thumbnail.link : shot.rootBlock.link
                  return (
                    <div key={shot.doc_id} className="relative w-full aspect-[4/3] rounded-2xl border border-neutral-700">
                      { (stableLink).endsWith('.mp4') && <BiPlay size={21} className="absolute top-4 right-4 text-neutral-200"/> }
                      { 
                        process.env.NODE_ENV === 'development'
                        ?
                          (stableLink).endsWith('.mp4')
                          ? <BiVideo size={21} className="absolute top-4 left-4 text-neutral-400" /> 
                          : <BiImage size={21} className="absolute top-4 left-4 text-neutral-400" />
                        :
                          (stableLink).endsWith('.mp4')
                          ? <video className="object-cover w-full h-full rounded-2xl">
                            <source src={cdn(stableLink)} />
                          </video>
                          : <Image src={cdn(stableLink)} fill className="object-cover rounded-2xl" alt='img' />
                      }
                    </div>
                  )
                })
              }
            </main>
          </div>
        </Suspense>
      </div>
    )
}
