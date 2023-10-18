'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { withCustomSortTab } from './const'
import { useAppSelector } from '@/components/entities/store/store'
import { useAuthState } from 'react-firebase-hooks/auth'
import { cleanPathname, detectCategoryTab, detectSortTab } from './helpers'
import { auth } from '@ui/utils/app'
import { Switch } from '@ui/components/ui/switch'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/ui/tabs'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@ui/components/ui/select'

type Props = {
    integrationMode?: boolean
    noCategory?: boolean
}
const CategoryAndOrder = ({ integrationMode=false, noCategory=true }: Props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [user] = useAuthState(auth)
    const isSub = useAppSelector(state => state.user.isSubscriber)
    const pathname = usePathname()
    // const excludeIf = (val: string, notSupported: boolean=false) => {
    //     if ((!user || !isSub || notSupported) && val === '/recommendations') return false
    //     if ((!user || notSupported) && val === '/following') return false
    //     if (!user && val === '/following') return false
    //     return true
    // }
    const detectedSortTab = detectSortTab(pathname)
    const detectedCategoryTab = detectCategoryTab(pathname, detectedSortTab)
    // const options = sortTabs(integrationMode) // .filter(opt => pathname.includes('/shots') ? excludeIf(opt.value, false) : excludeIf(opt.value, true))
    const isShotsLayout = useMemo(() => pathname.startsWith('/shots'), [pathname]) 
    const isShotPage = useMemo(() => pathname.startsWith('/view'), [pathname]) 
    const [orderTab, setOrderTab] = useState<string>(detectedSortTab)
    const [categoryTab, setCategoryTab] = useState<string>(detectedCategoryTab ? detectedCategoryTab : withCustomSortTab(orderTab)[0].value)
    const router = useRouter()
    useLayoutEffect(() => {
        if (!isShotPage) {
            if (detectedSortTab !== orderTab || detectedCategoryTab !== categoryTab) {
                const newSegment = categoryTab === '/' ? orderTab : `${orderTab}${categoryTab}`
                const newPath = cleanPathname(pathname, detectedSortTab, detectedCategoryTab)
                router.push(newPath + newSegment)
            }
        }
    },[isShotsLayout, isShotPage, orderTab, categoryTab])
    return (
        <div className="relative flex flex-row items-center justify-center w-full gap-8 px-4 shrink-0 h-fit">
            <div onClick={() => orderTab === '/popular' ? setOrderTab('/new') : setOrderTab('/popular')}
            className={`flex items-center justify-center w-fit gap-2 shrink-0 h-fit`}>
                <span className={`text-sm font-medium transition-all ${ orderTab === '/popular' ? 'text-neutral-200' : 'text-neutral-500' }`}>Популярные</span>
                <Switch checked={ orderTab === '/popular' ? false : true } />
                <span className={`text-sm font-medium transition-all ${ orderTab === '/new' ? 'text-neutral-200' : 'text-neutral-500' } `}>Новые</span>
            </div>
            {
                isTabletOrMobile
                ?
                <Select defaultValue="/" value={categoryTab}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className='z-20'>
                            {
                                withCustomSortTab(orderTab).map(tab =>
                                    <SelectItem key={tab.value} onClick={() => setCategoryTab(tab.value)} value={tab.value}
                                    >{tab.label}</SelectItem>
                                )
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                :
                <Tabs defaultValue="/" value={categoryTab}  className="w-fit">
                    <TabsList>
                        {
                            withCustomSortTab(orderTab).map(tab =>
                                <TabsTrigger key={tab.value} onClick={() => setCategoryTab(tab.value)} value={tab.value}>{tab.label}</TabsTrigger>
                                )
                        }
                    </TabsList>
                </Tabs>
            }
        </div>
    )
}

export default CategoryAndOrder