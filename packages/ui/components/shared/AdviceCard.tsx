import React from 'react'

type Props = {
    cover?: React.ReactNode
    content?: React.ReactNode
    title: React.ReactNode
}
const AdviceCard = ({ content, cover, title }: Props) => {
    return (
        <div className="relative flex flex-col aspect-[2.25/2] w-64 shrink-0 gap-2 rounded-2xl bg-neutral-900">
            <div className="z-10 p-3 rounded-t-xl bg-gradient-to-b from-black to-transparent">
                { title }
            </div>
            <div className="z-10 flex items-center justify-center w-full h-full">{ content }</div>
            <div className="absolute w-full h-full overflow-hidden rounded-2xl">{ cover }</div>
        </div>
    )
}

export default AdviceCard