import { host } from "@ui/const/host"
import { ShotData, DocShotData, ShortUserData } from "@ui/types"
import { db } from "@ui/utils/app"
import { collectionGroup, getDocs } from "firebase/firestore"

const cacheTime = 120

export const getAllShot = async() => {
    const collRef = collectionGroup(db, 'shots')
    const snaps = await getDocs(collRef)
    const convertedSnaps = snaps.docs.map(snap => ({ ...snap.data() as ShotData, doc_id: snap.id } as DocShotData))
    return convertedSnaps
}
export const getUser = async(userId: string) => {
    try {
        const userRes = await fetch(`${host}/users/shortData?userId=${userId}`, { method: 'GET', next: { revalidate: cacheTime } })
        const user: { short: ShortUserData } | null = await userRes.json()
        if (!user) {
            const userRes = await fetch(`${host}/users/shortData?userId=${userId}`, { method: 'GET', cache: 'no-store' })
            const user: { short: ShortUserData } | null = await userRes.json()
            return user ? user.short : null
        } else return user ? user.short : null
    } catch(e) {
        return null
    }
}
export const getShotsByTag = async(tag: string, order: string): Promise<DocShotData[]> => {
    try {
        const fetchUrl = `${host}/tags/${tag}/${order}`
        const res = await fetch(fetchUrl, { method: 'GET', next: { revalidate: cacheTime } })
        if (res.ok) {
            const shots: DocShotData[] = await res.json()
            return shots
        } else return []
    } catch(e) {
        console.log(e)
        return []
    }
}
export const getSearchedShots = async(q: string | null, order: string='popular') => {
    if (q) {
        try {
            const fetchUrl = `${host}/search/query/${q.toLowerCase()}/${order}`
            const res = await fetch(fetchUrl)
            if (res.ok) {
                const shots: DocShotData[] = await res.json()
                return shots
            } else return []
        } catch(e) {
            return []
        }
    } else return []
}

export const getShots = async(userId: string, tab: string | null, order?: 'popular' | 'new') => {
    const stableTab = !tab ? 1 : parseInt(tab)
    try {
        const shotsRes = await fetch(`${host}/shots/${stableTab === 1 ? 'onlyShots' : 'onlyDrafts'}/${userId}${order ? `&order=${order}` :''}`, { next: { revalidate: 120 } })
        const shots: DocShotData[] = await shotsRes.json()
        return shots
    } catch(e) {
        console.log(e)
        return null
    }
}
export const getShot = async(shotId: string, userId?: string) => {
    try {
        if (userId) {
            const shotRes = await fetch(`${host}/shots/shot/${shotId}/${userId}`, { method: 'GET', cache: 'no-store' })
            const shot: DocShotData = await shotRes.json()
            return shot
        } else {
            const shotRes = await fetch(`${host}/shots/shot/${shotId}`, { method: 'GET', cache: 'no-store' })
            const shot: DocShotData = await shotRes.json()
            return shot
        }
    } catch(e) {
        console.log(e)
        return null
    }
}
export const getUidFromNickname = async(nickname: string) => {
    try {
        const res = await fetch(`${host}/users/nickname/${nickname}`)
        if (res.ok) return await res.text()
        return null
    } catch(e) {
        console.log(e)
        return null
    }
}
export const getShotWithCache = async(userId: string, shotId: string) => {
    try {
        if (userId) {
            const shotRes = await fetch(`${host}/shots/shot/${shotId}/${userId}`, { method: 'GET', next: { revalidate: 120 } })
            const shot: DocShotData = await shotRes.json()
            return shot
        } else {
            const shotRes = await fetch(`${host}/shots/shot/${shotId}`, { method: 'GET', next: { revalidate: 120 } })
            const shot: DocShotData = await shotRes.json()
            return shot
        }
    } catch(e) {
        console.log(e)
        return null
    }
}
export const getShortByNickname = async(nickname: string) => {
    try {
        const userRes = await fetch(`${host}/users/short/nickname/${nickname}`, { method: 'GET', next: { revalidate: 1800 } })
        const user: { short: ShortUserData } | null = await userRes.json()
        return user ? user.short : null
    } catch(e) {
        console.log(e)
        return null
    }
} 
export const getUserShort = async(userId: string) => {
    try {
        const userRes = await fetch(`${host}/users/shortData?userId=${userId}`, { method: 'GET', next: { revalidate: 1800 } })
        const user: { short: ShortUserData } | null = await userRes.json()
        return user ? user.short : null
    } catch(e) {
        console.log(e)
        return null
    }

}