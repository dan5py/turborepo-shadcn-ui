import { createSlice } from "@reduxjs/toolkit"
import { Session } from "@ui/types/index"



type InitState = {
    session: Session
}
const initialState: InitState = {
    session: {
        disabled: false,
        sid: '',
        uid: null,
        uids: []
    }
}
const SessionSlice = createSlice({
    name: 'session-control',
    initialState,
    reducers: {
        setSession(state, { payload, type }: { payload: InitState['session'], type: string }) {
            state.session = payload
        }
    }
})
export const { setSession } = SessionSlice.actions
export default SessionSlice.reducer