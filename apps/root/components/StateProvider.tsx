'use client'
import { Provider } from 'react-redux'
import store from './entities/store/store'

const StateProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StateProvider