import { host } from '@ui/const/host'
import { db } from '@ui/utils/app'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const checkNickname = async(nickname: string) => {
    // false если ник существует, true если нет
    const nicksRef = collection(db, 'dm', 'users', 'nicknames')
    const q = query(nicksRef, where('nickname', '==', nickname))
    const snap = await getDocs(q)
    if (snap.empty) return false
    return true
}

export const removeNick = async(nickname: string) => {
    const url = `${host}/users/nickname/${nickname}`
    await fetch(url, { method: 'DELETE' })

}

export const createNick = async(nickname: string, uid: string) => {
    const url = `${host}/users/nickname/${nickname}/${uid}`
    await fetch(url, { method: 'POST' })
}