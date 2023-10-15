import { createSlice } from "@reduxjs/toolkit"


type InitState = {
    email: string
    password: string
}

const initialState: InitState = {
    email: '',
    password: ''
}

const EmailAndPasswordSlice = createSlice({
    name: 'emailAndPassword',
    initialState,
    reducers: {
        setEmail(state, { payload, type }: { payload: InitState['email'], type: string }) {
            state.email = payload
        },
        setPassword(state, { payload, type }: { payload: InitState['password'], type: string }) {
            state.password = payload
        }
    }
})
export const { setEmail, setPassword } = EmailAndPasswordSlice.actions
export default EmailAndPasswordSlice.reducer