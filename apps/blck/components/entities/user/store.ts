import { createSlice } from "@reduxjs/toolkit"



type InitState = {
    isSubscriber: boolean
}

const initialState: InitState = {
    isSubscriber: false
}

const UserSlice = createSlice({
    name: 'user-control',
    initialState,
    reducers: {
        setSubscribeState(state, { payload, type }: { payload: InitState['isSubscriber'], type: string }) {
            state.isSubscriber = payload
        }
    }
})
export const { setSubscribeState } = UserSlice.actions
export default UserSlice.reducer