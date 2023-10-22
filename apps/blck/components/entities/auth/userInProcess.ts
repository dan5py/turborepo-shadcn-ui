import { createSlice } from "@reduxjs/toolkit"
import { ShortUserData } from "@ui/types"




type InitState = {
    userInProcess: Partial<ShortUserData> | null
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