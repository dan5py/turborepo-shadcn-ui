'use client'

import { useAppDispatch } from "../store/store"
import { useLayoutEffect } from 'react'
import { setSubscribeState } from "./store"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@ui/utils/app"
const SubStatusWatcher = () => {
    const [user] = useAuthState(auth)
    const dispatch = useAppDispatch()
    const checkIsSubscriber = async() => {
        if (user) {
            const res = await user.getIdTokenResult()
            const claims = res.claims
            if (claims && claims.isSubscriber) {
                dispatch(setSubscribeState(claims.isSubscriber as boolean || undefined ? claims.isSubscriber as boolean : false))
            }
            if (claims && !claims.isSubscriber) dispatch(setSubscribeState(false))
        } else dispatch(setSubscribeState(false))
    }
    useLayoutEffect(() => {
        checkIsSubscriber()
    },[user?.uid])
    return (
        <></>
    )
}

export default SubStatusWatcher