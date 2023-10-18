import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { reducer } from '@ui/components/entities/store/store'
import UserReducer from '@/components/entities/user/store'
import draftReducer from '@/components/entities/uploader/draft'
import { combineReducers } from '@reduxjs/toolkit'

const uploader = combineReducers({ draft: draftReducer })

export const store = configureStore({
    reducer: {
        ...reducer,
        uploader: uploader,
        user: UserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;