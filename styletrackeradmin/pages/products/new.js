import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState( '');
    const [price, setPrice] = useState('');
    const [goProductPage, setGoProductPage] = useState(false);
    
    const router = useRouter();

    async function createProduct(e) {
        e.preventDefault()
        console.log(`
        title: ${title},
        description: ${description},
        price: ${price}
        `)

        const data = { title, description, price };
        await axios.post('/api/products', data);
        setGoProductPage(true);
    }

    if(goProductPage) {
        router.push('/products');
    }

    return (
        <Layout>
            <h1 className="">New Product</h1>
            <form onSubmit={ createProduct } className="ml-3">
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="product_name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <label>Price (in USD)</label>
                <input
                    type="text"
                    placeholder="price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}
                />
                <button
                    type="submit"
                    className="btn-primary">
                    Save
                </button>
            </form>
        </Layout>
    )
}