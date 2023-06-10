import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images: existingImages,
    category: assignedCategory,

}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [images, setImages] = useState(existingImages || []);
    const [category, setCategory] = useState(assignedCategory || '');

    const [categories, setCategories] = useState([]);

    const [goProductPage, setGoProductPage] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        axios.get('/api/categories').then(res => {
            setCategories(res.data);
        })
    }, [])

    async function saveProduct(e) {
        e.preventDefault();
        const data = { title, description, price, images, category };

        if (_id) {
            //update product 
            await axios.put('/api/products', { ...data, _id });
        } else {
            //create
            await axios.post('/api/products', data);
        }

        setGoProductPage(true);
    }

    if (goProductPage) {
        router.push('/products');
    }

    async function uploadImages(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            };

            const res = await axios.post('/api/upload', data);
            // console.log(res.data);

            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    };

    function updateImagesOrder(images) {
        setImages(images);
    };

    return (
        <form onSubmit={saveProduct} className="ml-3">
            <label>Product Name</label>
            <input
                type="text"
                placeholder="product_name"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <label>Cateogry</label>
            <select className="w-[90%] m-1 mb-4" value={category} onChange={ev => setCategory(ev.target.value)}>
                <option value="" >Uncategorized</option>
                {categories.length > 0 && categories.map( category => (
                    <option value={category._id}>{category.name}</option>  
                ))}
            </select>
            <label>
                Photos
            </label>
            <div className="mb-2 flex flex-wrap gap-1">
                <ReactSortable 
                    list={images} 
                    className="flex flex-wrap gap-1"
                    setList={updateImagesOrder}
                >
                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-24">
                            <img src={link} alt="product image" className="rounded-lg"></img>
                        </div>
                    ))}
                </ReactSortable>

                {isUploading && (
                    <div className="h-24 flex items-center">
                        <Spinner />
                    </div>
                )}
                <label className="w-24 h-24 border flex items-center justify-center gap-1 text-gray-500 rounded-lg bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <div className="text-sm">
                        Upload
                    </div>
                    <input type="file" className="hidden" onChange={uploadImages} />
                </label>
                {!images.length && (
                    <div>No Photos for this product!</div>

                )}
            </div>

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