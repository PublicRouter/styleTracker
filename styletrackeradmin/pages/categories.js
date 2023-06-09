import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
    const [name, setName] = useState('');
    const [currentCategories, setCurrentCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    function fetchCategories() {
        axios.get('/api/categories').then(res => {
            setCurrentCategories(res.data);
        });
    }

    async function saveCategory(ev) {
        ev.preventDefault();
        await axios.post('api/categories', {name, parentCategory});
        setName('');
        fetchCategories();
    };

    return (
        <Layout>
            <h1>Categories</h1>
            <label>New category name</label>
            <form onSubmit={saveCategory} className="flex gap-1">
                <input type="text" className="mb-0" placeholder={"Category Name"} value={name} onChange={ev => setName(ev.target.value)}/>
                <select className="mb-0" onChange={ev => setParentCategory(ev.target.value)} value={parentCategory}>
                    <option value="">No parent cat</option>
                    {
                        currentCategories.length > 0 && currentCategories.map(cat => (
                            <option value={cat._id}>{cat.name}</option>
                        ))
                    }
                    
                </select>
                <button type="submit" className="btn-primary py-1">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category Name</td>
                    </tr>
                </thead>
                <tbody>
                    {currentCategories.length > 0 && currentCategories.map(category => (
                            <tr className="" key={category._id}>
                                <td>{category.name}</td>
                            </tr>
                    ))}
                </tbody>
            </table>

        </Layout>
    )
}