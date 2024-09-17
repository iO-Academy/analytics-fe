import { useEffect, useState } from "react";

export default function useProduct(id) {
    const [data, setData] = useState([])
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("products")) {
            const products = JSON.parse(localStorage.getItem("products"))
            const product = products.filter(product => product.id == id)
                
            if (product.length === 0) {
                setNotFound(true)
            } else {
                setData(product[0])
            }
        } else {
            fetch('/products.json')
            .then(res => res.json())
            .then(products => {
                localStorage.setItem("products", JSON.stringify(products))
                const product = products.filter(product => product.id == id)
                
                if (product.length === 0) {
                    setNotFound(true)
                } else {
                    setData(product[0])
                }
            })
        }
        
    }, [id])

    return {data, notFound}
}