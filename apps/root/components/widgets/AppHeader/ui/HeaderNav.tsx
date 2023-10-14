import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@ui/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'
import AppsMenu from './AppsMenu'

const HeaderNav = () => {
    return (
        <nav>
            <NavigationMenu>
                <NavigationMenuList>
                    <AppsMenu />
                    <NavigationMenuItem>
                        <Link href="/blog" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Блог
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/membership" passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            DM+
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default HeaderNav