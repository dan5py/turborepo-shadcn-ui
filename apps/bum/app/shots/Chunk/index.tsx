import { Button } from "@ui/components/ui/button"
import { host } from "@ui/const/host"
import { DocShotData } from "@ui/types"
import Link from "next/link"
import { generateChunks } from '@ui/helpers/chunk'
import ChunkController from "./ChunkController"



const getCountOfShots = async(countPrefix: string) => {
    try {
        const link = `${host}${countPrefix}`
        const res = await fetch(link, {
            method: "GET",
            next: { revalidate: 120 }
        })
        if (res.ok) {
            const count = parseInt(await res.json())
            return count
        } else return 0
    } catch(e) {
        return 0
    }

}
const getFirstChunk = async(shotsPrefix: string) => {
    try {
        const res = await fetch(`${host}${shotsPrefix}?skip=0`, {
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
type Props = {
    countPrefix: string
    shotsPrefix: string
}
const Chunk = async({ countPrefix, shotsPrefix }: Props) => {
    const count = await getCountOfShots(countPrefix)
    const firstChunk = count !== 0 ? await getFirstChunk(shotsPrefix) : null
    const chunksCount = count <= 16 ? 0 : Math.ceil((count - 1) / 16)
    const chunks = generateChunks(chunksCount, shotsPrefix)
    if (count === 0) return (
        <div className='flex flex-col items-center justify-center w-full h-full gap-4 p-12 col-span-full shot_wrapper'>
            <span className='text-sm text-neutral-200'>Нет работ, вы можете быть первым</span>
            <Link href='/uploads/shot'>
                <Button>Загрузить работу</Button>
            </Link>
        </div>
    )
    return (
        <ChunkController initialChunk={firstChunk} chunks={chunks} lastChunk={chunksCount} />
    )
}
export default Chunk