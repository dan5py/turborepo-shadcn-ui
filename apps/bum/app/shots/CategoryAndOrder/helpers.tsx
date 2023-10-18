export const detectCategoryTab = (segment: string, sortTab: string) => {
    const removedSortTab = segment.replace(sortTab, '')
    if (segment.endsWith(sortTab)) return '/'
    if (removedSortTab.endsWith('/animation')) return '/animation'
    if (removedSortTab.endsWith('/illustration')) return '/illustration'
    if (removedSortTab.endsWith('/typography')) return '/typography'
    if (removedSortTab.endsWith('/product_design')) return '/product_design'
    if (removedSortTab.endsWith('/web')) return '/web'
    if (removedSortTab.endsWith('/mobile')) return '/mobile'
    return '/'
}

export const cleanPathname = (pathname: string, orderTab: string, categoryTab: string) => {
    if (categoryTab !== '/') {
        const newPathname = pathname.replace(`${orderTab}${categoryTab}`, '')
        return newPathname
    } else {
        const newPathname = pathname.replace(orderTab, '')
        return newPathname
    }
}

export const detectSortTab = (segment: string) => {
    if (segment.includes('/recommendations')) return '/recommendations'
    if (segment.includes('/popular')) return '/popular'
    if (segment.includes('/following')) return '/following'
    if (segment.includes('/new')) return '/new'
    return '/popular'
}
// export const replaceSortTabTo = (segment: string, toReplace: string) => {
//     if (segment.includes('/recommendations')) return segment.replace('/recommendations', toReplace)
//     if (segment.includes('/popular')) return segment.replace('/popular', toReplace)
//     if (segment.includes('/following')) return segment.replace('/following', toReplace)
//     if (segment.includes('/new')) return segment.replace('/new', toReplace)
//     return segment
// }
// export const replaceCategoryTabTo = (segment: string, sortTab: string, toReplace: string) => {
//     if (segment.endsWith(sortTab)) return segment.replace(sortTab, toReplace)
//     if (segment.endsWith(`${sortTab}/animation`)) return segment.replace(`${sortTab}/animation`, toReplace)
//     if (segment.endsWith(`${sortTab}/illustration`)) return segment.replace(`${sortTab}/illustration`, toReplace)
//     if (segment.endsWith(`${sortTab}/typography`)) return segment.replace(`${sortTab}/typography`, toReplace)
//     if (segment.endsWith(`${sortTab}/product_design`)) return segment.replace(`${sortTab}/product_design`, toReplace)
//     if (segment.endsWith(`${sortTab}/web`)) return segment.replace(`${sortTab}/web`, toReplace)
//     if (segment.endsWith(`${sortTab}/mobile`)) return segment.replace(`${sortTab}/mobile`, toReplace)
//     return segment
// }