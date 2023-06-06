import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({ _id, title: existingTitle, description: existingDescription, price: existingPrice }) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goProductPage, setGoProductPage] = useState(false);

    const router = useRouter();

    async function saveProduct(e) {
        e.preventDefault();
        const data = { title, description, price };

        if ( _id ) {
            //update product 
            await axios.put('/api/products', {...data, _id});
        } else {
            //create
            await axios.post('/api/products', data);
        }

        setGoProductPage(true);
   
    }

    if (goProductPage) {
        router.push('/products');
    }

    return (
        <form onSubmit={saveProduct} className="ml-3">
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
    )
}