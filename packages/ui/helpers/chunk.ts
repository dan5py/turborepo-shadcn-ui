import { host } from "@ui/const/host"

export const generateChunks = (chunkCount: number, shotsPrefix: string) => {
    const chunks = []
    for (let i = 1; i < chunkCount; i++) {
        const chunkLink = `${host}${shotsPrefix}?skip=${i * 16}`
        chunks.push(chunkLink)
    }
    return chunks
}
export const generateUserChunks = (userId: string, chunkCount: number, order: string) => {
    const chunks = []
    for (let i = 0; i < chunkCount; i++) {
        const chunkLink = `${host}/shots/v2/chunkedUserShots/${order}?userId=${userId}&skip=${i * 16}`
        chunks.push(chunkLink)
    }
    return chunks
}