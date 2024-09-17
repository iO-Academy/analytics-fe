import useProduct from "../../hooks/useProduct"
import SingleProduct from "../SingleProduct"

export default function RelatedProduct({id}) {
    const {data, notFound} = useProduct(id)
    
    return (
        <SingleProduct id={data.id} name={data.name} price={data.price} image={data.image} />
    )
}