import React from 'react'
import Chunk from '../Chunk'

type Props = {
    params: {
        order: string
    }
}
const OrderPage = ({ params }: Props) => {
    return (
        <Chunk countPrefix={`/shots/count/${params.order}/`} shotsPrefix={`/shots/all/${params.order}/`} />    
    )
}

export default OrderPage