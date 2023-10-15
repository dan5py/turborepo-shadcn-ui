import { ShortUserData } from "@/types"
import { createSlice } from "@reduxjs/toolkit"




type InitState = {
    userInProcess: ShortUserData | null
}

const initialState: InitState = {
    userInProcess: null
}

const userInProcessSlice = createSlice({
    name: 'user-in-process-control',
    initialState,
    reducers: {
        setUserInProcess(state, { payload, type }: { payload: InitState['userInProcess'], type: string }) {
            state.userInProcess = payload
        }
    }
})
export const { setUserInProcess } = userInProcessSlice.actions
export default userInProcessSlice.reducer