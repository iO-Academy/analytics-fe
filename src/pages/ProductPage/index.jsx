import { useParams } from "react-router-dom"
import useProduct from "../../hooks/useProduct"
import { useEffect } from "react"
import RelatedProduct from "../../components/RelatedProduct"

export default function ProductPage() {
    const {id} = useParams()
    const {data, notFound} = useProduct(id)

    useEffect(() => {
        document.title = data.name
    }, [data])

    return (
        <>
        <main className="flex gap-5 mb-10">
            <div className="w-1/3">
                <img src={data.image} />
            </div>
            <div className="flex flex-col justify-between w-2/3">
                <h1 className="text-3xl">{data.name}</h1>
                <p>{data.description}</p>
                <p className="text-xl">£{data.price}</p>
                <button className="bg-blue-300 px-3 py-2 rounded-sm hover:bg-blue-700 hover:text-white transition-colors">Add to basket</button>
            </div>
        </main>
        <h2 className="text-2xl mb-5">Related products</h2>
        <section className="grid grid-cols-4 gap-10">
        {data.related && data.related.map(related => (
            <RelatedProduct id={related} key={related} />
        ))}
        </section>
        </>
        
    )
}