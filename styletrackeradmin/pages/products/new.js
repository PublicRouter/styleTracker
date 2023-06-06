import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState( '');
    const [price, setPrice] = useState('');

    function createProduct(e) {
        e.preventDefault()
        console.log(`
        title: ${title},
        description: ${description},
        price: ${price}
        `)
    }

    return (
        <Layout>
            <form onSubmit={ createProduct }>
                <h1 className="">New Product</h1>
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