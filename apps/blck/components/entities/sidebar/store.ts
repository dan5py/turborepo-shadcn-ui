import { createSlice } from "@reduxjs/toolkit"


type InitState = {
    isOpen: boolean
}

const initialState: InitState = {
    isOpen: false
}

const sidebarControl = createSlice({
    name: 'sidebar-control',
    initialState,
    reducers: {
        setOpen(state, { payload, type }: { payload: InitState['isOpen'], type: string }) {
            state.isOpen = payload
        }
    }
})

export const { setOpen } = sidebarControl.actions
export default sidebarControl.reducer