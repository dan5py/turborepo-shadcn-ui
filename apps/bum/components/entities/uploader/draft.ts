import { createSlice } from '@reduxjs/toolkit';
import { ShotForUpload } from "@ui/types"


type Props = {
    draftId: string | null
    draft: ShotForUpload
}

const initialState: Props = {
    draftId: null,
    draft: {
        title: '',
        rootBlock: {
            type: 'image',
            link: ''
        },
        blocks: [],
        thumbnail: null
    }
}

const draftSlice = createSlice({
    name: 'draft-control',
    initialState,
    reducers: {
        setTitle(state, { payload, type }: { payload: string, type: string }) {
            state.draft.title = payload
        },
        setBlocks(state, { payload, type }: { payload: ShotForUpload['blocks'], type: string }){
            state.draft.blocks = payload
        }
    }
})

export const { setTitle, setBlocks } = draftSlice.actions
export default draftSlice.reducer