import { useParams } from "react-router-dom"
import useProduct from "../../hooks/useProduct"

export default function ProductPage() {
    const {id} = useParams()
    const {data, notFound} = useProduct(id)

    return (
        <>
            <h1>{data.name}</h1>
        </>
    )
}