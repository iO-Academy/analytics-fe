import { useEffect, useState } from "react";

export default function useProducts() {
    const [data, setData] = useState([])

    useEffect(() => {
        if (localStorage.getItem("products")) {
            setData(JSON.parse(localStorage.getItem("products")))
        } else {
            fetch('/products.json')
            .then(res => res.json())
            .then(products => {
                localStorage.setItem("products", JSON.stringify(products))
                setData(products)
            })
        }
    }, [])

    return data
}