export const cdn = (link: string): string => {
    const stableLink = link.charAt(0) === '/' ? link.substring(1) : link
    const fetchUrl = `https://cdn.darkmaterial.space/${stableLink}`
    return fetchUrl
}
