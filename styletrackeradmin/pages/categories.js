import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Categories() {
    const [editedCategory, setEditedCategory] = useState(null);


    const [name, setName] = useState('');
    const [currentCategories, setCurrentCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState('');
    const [properties, setProperties] = useState([]);

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
        const data = { name, parentCategory };
        if (editedCategory) {
            data._id = editedCategory._id;
            await axios.put('/api/categories', data)
            setEditedCategory(null);
        } else {
            await axios.post('api/categories', data);
        };

        setName('');
        setParentCategory('');
        fetchCategories();
    };

    function editCategory(category) {
        setEditedCategory(category);
        setName(category.name);
        category.parent ? setParentCategory(category.parent?._id) : setParentCategory('')


    };

    function deleteCategory(category) {
        Swal.fire({
            title: `Do you want to delete: ${category.name}?`,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete.',
            width: 300,

        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            console.log(result)
            if (result.isConfirmed) {
                const {_id} = category;
                await axios.delete('/api/categories?_id='+_id);
                
                await Swal.fire('Saved!', '', 'success')
                fetchCategories();
            } else if (result.isDismissed) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        }).catch(err => console.log(err));
    };

    //category properties
    function addProperty() {
        setProperties( prev => {
            return [...prev, {name: '', values: ''}]
        })
    }


    return (
        <Layout>
            <h1>Categories</h1>
            <label className="ml-2">{editedCategory ? `Edit category: ${editedCategory.name}` : 'Create new category'}</label>
            <form onSubmit={saveCategory} className="">
                <div className="flex gap-1">
                    <input type="text" placeholder={"Category Name"} value={name} onChange={ev => setName(ev.target.value)} />
                    <select onChange={ev => setParentCategory(ev.target.value)} value={parentCategory}>
                        <option value="">No parent cat</option>
                        {
                            currentCategories.length > 0 && currentCategories.map(cat => (
                                <option key={cat._id} value={cat._id}>{cat.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block">Properties</label>
                    <button 
                        type='button' 
                        className="btn-basic text-sm"
                        onClick={addProperty}>
                        Add new property
                    </button>
                    {properties.length > 0 && properties.map(property => (
                        <div className="flex gap-1">
                            <input type='text' value={property.name} placeholder="property name (example: color)" className=""></input>
                            <input type='text' value={property.values} placeholder="values, comma seperated" className=""></input>
                        </div>
                    ))}
                </div>
                
                <button type="submit" className="btn-primary py-1">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category Name</td>
                        <td>Category Parent</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {currentCategories.length > 0 && currentCategories.map(category => (
                        <tr className="" key={category._id}>
                            <td>{category.name}</td>
                            <td>{category?.parent?.name}</td>
                            <td className="flex gap-1">
                                <button
                                    onClick={() => editCategory(category)}
                                    className="btn-def">
                                    edit
                                </button>
                                <button
                                    onClick={() => deleteCategory(category)}
                                    className="btn-red">
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Layout>
    )
}