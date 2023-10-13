export const largeNumber = (count: number) => {
    if (count < 999) {
        return count
    } else if (count >= 1000 && count <= 999_999) {
        return (count / 1000) + 'k'
    } else return (count / 1_000_000) + ' млн.'
}