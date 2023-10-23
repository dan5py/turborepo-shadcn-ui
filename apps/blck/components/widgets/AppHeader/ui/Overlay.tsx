'use client'
import { useAppDispatch, useAppSelector } from '@/components/entities/store/store'
import { motion } from 'framer-motion'

const Overlay = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(state => state.sidebar.isOpen)
    if (!isOpen) return null
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-40' />
    )
}

export default Overlay