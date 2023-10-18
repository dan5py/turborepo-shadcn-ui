import Chunk from "../../Chunk"

type Props = {
    params: {
        order: string
        category: string
    }
}
const ShotsByCategoryPage = ({ params }: Props) => {
    return (
        <Chunk countPrefix={`/shots/count/${params.order}/${params.category}`} shotsPrefix={`/shots/all/${params.order}/${params.category}`} />
    )
}

export default ShotsByCategoryPage