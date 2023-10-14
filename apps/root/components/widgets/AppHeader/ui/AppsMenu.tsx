import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from '@ui/components/ui/navigation-menu'
// import dm from '@ui/assets/dm.svg'
import bum from '@ui/assets/bum.svg'
import Image from 'next/image'
import Link from 'next/link'

const AppsMenu = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Приложения</NavigationMenuTrigger>
            <NavigationMenuContent className='rounded-xl'>
                <ul className='flex flex-col w-48 gap-2 p-2 h-fit'>
                    {/* <li className='list-none'>
                        <Link href='/apps/dm' className="flex items-center w-full h-10 gap-2 p-2 rounded-md hover:bg-neutral-900">
                            <Image src={dm} className='rounded-full' width={28} height={28} alt='dm-logo' />
                            <span className='text-sm font-medium'>DarkMaterial</span>
                        </Link>
                    </li> */}
                    <li className='list-none'>
                        <Link href='/apps/bum' className="flex items-center w-full h-10 gap-2 p-2 rounded-md hover:bg-neutral-900">
                            <Image src={bum} className='rounded-full' width={28} height={28} alt='bum-logo' />
                            <span className='text-sm font-medium'>bum</span>
                        </Link>
                    </li>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

export default AppsMenu