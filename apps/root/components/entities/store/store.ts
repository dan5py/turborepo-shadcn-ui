import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { reducer } from '@ui/components/entities/store/store'
import UserReducer from '@/components/entities/user/store'
// import SessionReducer from '@/components/entities/session/session'
import StepReducer from '@/components/entities/auth/steps'
import EmailAndPasswordReducer from '@/components/entities/auth/email&password'
import UserInProcessReducer from '@/components/entities/auth/userInProcess'

export const store = configureStore({
    reducer: {
        ...reducer,
        steps: StepReducer,
        process: UserInProcessReducer,
        form: EmailAndPasswordReducer,
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