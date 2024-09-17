import { useEffect, useState } from "react";

export default function useProducts() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(products => setData(products))
    }, [])

    return data
}