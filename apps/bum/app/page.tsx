import Image from "next/image"
import bum from '@ui/assets/bum.svg'
import Link from "next/link"

const HomePage = () => {
    return (
        <div className='relative flex items-center justify-center w-full min-h-screen'>
            <div className="absolute flex items-center justify-center overflow-hidden border h-9 top-4 rounded-xl w-fit border-neutral-700">
                <Link href='/shots' className="p-2 text-sm font-medium cursor-pointer text-neutral-300 hover:text-neutral-200 hover:bg-neutral-900">Вдохновение</Link>
                <div className="w-[1px] h-2/3 bg-neutral-700" />
                <Link href='/upload/shot' className="p-2 text-sm font-medium cursor-pointer text-neutral-300 hover:text-neutral-200 hover:bg-neutral-900">Поделиться работой</Link>
            </div>
            <Image src={bum} width={64} height={64} alt='bum-logo' />
        </div>
    )
}

export default HomePage