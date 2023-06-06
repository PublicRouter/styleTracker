import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios.get('/api/products').then( res => {
            setProducts(res.data);
        })
    }, []);

    return (
        <Layout>
            <h1>Products</h1>
            <Link className="btn-primary" href={'/products/new'}> Add new product</Link>
            <table className="basic m-2 mt-6">
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr>
                            <td>{product.title}</td>
                            <td>
                                <Link href={'/products/'+product._id}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
        
    )
}