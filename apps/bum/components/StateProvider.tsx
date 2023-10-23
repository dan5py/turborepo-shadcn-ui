'use client'
import { Provider } from 'react-redux'
import store from './entities/store/store'
import { ReactNode } from 'react'

const StateProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StateProvider