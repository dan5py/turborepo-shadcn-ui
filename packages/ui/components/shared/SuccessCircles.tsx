'use client'
import { BiCheck } from 'react-icons/bi'
import { useSpring, animated, easings } from '@react-spring/web'

const SuccessCircles = () => {
    const bigCircle = useSpring({
        from: {
            width: '4rem',
            height: '4rem'
        },
        to: {
            width: '16rem',
            height: '16rem'
        },
        config: {
            duration: 700,
            easing: easings.easeInOutCubic
        }
    })
    const mediumCircle = useSpring({
        from: {
            width: '4rem',
            height: '4rem'
        },
        to: {
            width: '12rem',
            height: '12rem'
        },
        config: {
            duration: 500,
            easing: easings.easeInOutCubic
        }
    })
    const smallCircle = useSpring({
        from: {
            width: '4rem',
            height: '4rem'
        },
        to: {
            width: '8rem',
            height: '8rem'
        },
        config: {
            duration: 300,
            easing: easings.easeInOutCubic
        }
    })
    return (
        <div className="relative flex items-center justify-center w-64 h-64">
            <animated.div style={bigCircle} className="absolute z-0 flex items-center justify-center w-64 h-64 bg-green-600 rounded-full blur-3xl" />
            <animated.div style={bigCircle} className="z-0 flex items-center justify-center w-64 h-64 bg-green-600 rounded-full" />
            <animated.div style={mediumCircle} className="absolute z-10 flex items-center justify-center w-48 h-48 bg-green-600 border border-green-400 rounded-full" />
            <animated.div style={smallCircle} className="absolute z-20 flex items-center justify-center w-32 h-32 bg-green-600 border border-green-400 rounded-full"><BiCheck size={52} className='text-white' /></animated.div>
        </div>
    )
}

export default SuccessCircles