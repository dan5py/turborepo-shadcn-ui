import { createSlice } from "@reduxjs/toolkit"



type InitState = {
    step: 'email' | 'password' | 'success' | 'failed'
}

const initialState: InitState = {
    step: 'email'
}

const StepSlice = createSlice({
    name: 'step-control',
    initialState,
    reducers: {
        setStep(state, { payload, type }: { payload: InitState['step'], type: string }) {
            state.step = payload
        }
    }
})
export const { setStep } = StepSlice.actions
export default StepSlice.reducer