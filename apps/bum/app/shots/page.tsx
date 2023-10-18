import { BiVideo, BiImage } from "react-icons/bi"
import { getAllShot } from "../fetchers"
import { Suspense } from 'react'

export default async function ShotsPage() {
    const allShots = await getAllShot()
    return (
      <div className="flex flex-col w-full h-full gap-12">
        <div className="flex flex-col items-center justify-center w-full h-96">
        </div>
        <Suspense>
        <main className="grid w-full px-4 py-4 h-fit shots_grid gap-9">
          {
            allShots.map(shot => <div key={shot.doc_id} className="relative w-full aspect-[4/3] rounded-2xl border border-neutral-700">
              { 
                (shot.thumbnail ? shot.thumbnail.link : shot.rootBlock.link).endsWith('.mp4') 
                ? <BiVideo size={21} className="absolute top-4 left-4 text-neutral-400" /> 
                : <BiImage size={21} className="absolute top-4 left-4 text-neutral-400" />
              }
            </div> )
          }
        </main>
        </Suspense>
      </div>
    )
}
