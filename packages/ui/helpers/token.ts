import { Session } from "@ui/types/index"
import { sign, verify } from "jsonwebtoken"

export const generateSidToken = (session: Session): string | null => {
    if (process.env.NEXT_PUBLIC_JWT_SECRET) {
        const payload = {
            sid: session.sid
        }
        const token = sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET)
        return token
    } else {
        return null
    }
}
export const verifyToken = async(sid: string) => {
    if (process.env.NEXT_PUBLIC_JWT_SECRET) {
        const token = verify(sid, process.env.NEXT_PUBLIC_JWT_SECRET)
        return token
    } else {
        return null
    }
}