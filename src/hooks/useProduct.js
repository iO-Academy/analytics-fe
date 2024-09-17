import { useEffect, useState } from "react";

export default function useProduct(id) {
    const [data, setData] = useState([])
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(products => {
                const product = products.filter(product => product.id == id)
                
                if (product.length === 0) {
                    setNotFound(true)
                } else {
                    setData(product[0])
                }
            })
    }, [])

    return {data, notFound}
}