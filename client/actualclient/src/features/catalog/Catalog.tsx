import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import {  IProduct } from "../../app/interfaces";
import API from "../../app/axios/api_agent";
import Loading from "../../app/errors/Loading";


export default function Catalog() {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        API.Catalog.list()
        .then(products => setProducts(products))
    }, [])

    if(loading) return <Loading message="productos" />

    return <ProductList products={products} />
}