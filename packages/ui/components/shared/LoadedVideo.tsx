
export type LoadedVideoProps = {
    link: string
    autoPlay?: boolean
}
const LoadedVideo = ({ link, autoPlay=false }: LoadedVideoProps) => {
    return (
        <video src={link} loop placeholder="blur" autoPlay={autoPlay} controls={false} muted className='object-cover w-full h-full rounded-xl' />
    )
}

export default LoadedVideo