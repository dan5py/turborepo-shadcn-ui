import bum from '@ui/assets/bum.svg'
import dm_plus from '@ui/assets/dm+.svg'
import Image from 'next/image'
import { BiPlus } from 'react-icons/bi'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ui/components/ui/tooltip'
import Link from 'next/link'
const NavSection = () => {
    return (
        <nav className="flex items-center overflow-hidden border h-9 w-fit rounded-xl border-neutral-700">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="px-3 py-2 cursor-pointer hover:bg-neutral-900">
                            <Image src={bum} width={20} height={20} alt='bum-logo' />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span className='text-sm'>Домой</span>
                    </TooltipContent>
                </Tooltip>
                <div className="w-[1px] h-2/3 bg-neutral-700"/>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="px-3 py-2 cursor-pointer hover:bg-neutral-900">
                            <Image src={dm_plus} width={20} height={20} alt='dm-plus-logo' />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span className='text-sm'>Подписка</span>
                    </TooltipContent>
                </Tooltip>
                <div className="w-[1px] h-2/3 bg-neutral-700"/>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href='/upload/shot' className="px-3 py-2 cursor-pointer hover:bg-neutral-900">
                            <BiPlus size={20} />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span className='text-sm'>Добавить работу</span>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>
    )
}

export default NavSection