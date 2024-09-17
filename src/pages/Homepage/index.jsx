import { useEffect } from "react"
import SingleProduct from "../../components/SingleProduct"
import useProducts from "../../hooks/useProducts"

export default function Homepage() {
    const products = useProducts()

    useEffect(() => {
        document.title = "Online store"
    }, [])

    return (
        <>
        <section className="grid grid-cols-4 gap-8">
            {products.map(product => <SingleProduct 
                key={product.id} 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image} />
            )}
        </section>
        </>
    )
}