import { host } from "@ui/const/host"
import { sign } from "jsonwebtoken"
import { DateTime } from "luxon"

export const checkCode = async(code: string) => {
    try {
        const url = `${host}/plus/code/${code}`
        const res = await fetch(url, { method: 'GET', cache: 'no-store' })
        if (res.ok) return await res.json()
        return null
    } catch(e) {
        return null
    }
}

const deleteCode = async(code: string) => {
    const token = generateAccessToken()
    if (token) {
        const url = `${host}/plus/code/${code}`
        const headers = new Headers()
        headers.set('token', token)
        const res = await fetch(url, { method: 'DELETE', cache: 'no-store', headers: headers })
        if (res.ok) return true
        return false
    } return false
}

export const getAccessTokenForSubManage = async() => {
    const token = generateAccessToken()
    if (token) {
        const url = `${host}/plus/accessToSub`
        const headers = new Headers()
        headers.set('token', token)
        const res = await fetch(url, { method: 'GET', headers: headers })
        if (res.ok) {
            const generatedToken = await res.json()
            return generatedToken
        } else return false
    } return false
}

export const setSubStatus = async(accessToken: string, userId: string, status: boolean) => {
    const url = `${host}/plus/setSubStatus?userId=${userId}&status=${status}`
    const headers = new Headers()
    headers.set('token', accessToken)
    const res = await fetch(url, { method: 'POST', headers: headers })
    if (res.ok) {
        const status = await res.json()
        return status
    } else return false
}

export const activateCodeAndDelete = async(code: string, userId: string) => {
    const access_token = await getAccessTokenForSubManage()
    if (access_token) {
        const res = await setSubStatus(access_token, userId, true)
        if (res) {
            process.env.NODE_ENV !== 'development' && await deleteCode(code)
            return res
        } else false
    }
    return null
}


const generateAccessToken = () => {
    if (process.env.NEXT_PUBLIC_JWT_SECRET && process.env.NEXT_PUBLIC_TOKEN) {
        const payload = {
            verifyToken: process.env.NEXT_PUBLIC_TOKEN,
            iat: DateTime.now().plus({ minutes: 5 }).toSeconds()
        }
        const token = sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET)
        return token
    } else {
        return null
    }
}