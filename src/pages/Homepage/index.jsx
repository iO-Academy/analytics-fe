import SingleProduct from "../../components/SingleProduct"
import useProducts from "../../hooks/useProducts"

export default function Homepage() {
    const products = useProducts()

    return (
        <>
        <section className="grid grid-cols-4">
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