import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(res => {
                    setProducts(res.data);
                })
        }
    }, [cartProducts]);

    function addProductQuantity(productId) {
        addProduct(productId);
    };

    function removeProductQuantity(productId) {
        removeProduct(productId)
    };

    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

    

    return (
        <>
            <Header />
            <div className="flex items-center sm:items-start flex-col sm:flex-row sm:m-10 gap-6 min-h-[300px]">
                <div className="mt-8 sm:mt-0 w-[90%] sm:w-[60%] h-full bg-white rounded-lg p-[30px]">
                    <h2 className="mb-6 font-bold text-[1.3em]">Cart </h2>

                    {!cartProducts?.length && (
                        <div className="">
                            Your Cart is Empty!
                        </div>
                    )}
                    {products?.length > 0 && (

                        <table className="w-full">
                            <thead className="uppercase text-left text-[#bbb] text-[.8rem]">
                                <tr className="border-b-[2px] border-gray-300">
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr>
                                        <td>
                                            {product.title}
                                            <div className="max-h-[80px] max-w-[80px] flex items-center justify-center p-2 bg-white shadow-md m-2 border-[1px] border-gray-300 shadow-[#666] rounded-md">
                                                <img className="max-w-full max-h-[70px]" src={product.images[0]} />
                                            </div>
                                        </td>
                                        <td className="">
                                            <button onClick={() => removeProductQuantity(product._id)} className="bg-gray-200 rounded-lg px-3">-</button>
                                            <span className="mx-2">{cartProducts.filter(id => id === product._id).length}</span>
                                            <button onClick={() => addProductQuantity(product._id)} className="bg-gray-200 rounded-lg px-3">+</button>
                                        </td>
                                        <td>{cartProducts.filter(id => id === product._id).length * product.price}</td>

                                    </tr>
                                ))}
                                <tr className="h-[120px] flex items-center font-bold">Total Price: {total.toFixed(2)} </tr>

                            </tbody>
                        </table>
                    )}






                </div>
                {!!cartProducts?.length && (
                    <div className="orderInfoBox w-[90%] sm:w-[40%] min-h-[200px] bg-[#222] rounded-lg p-[30px]">
                        <h2 className="font-bold text-[1.1em] text-white mb-2   ">Order <br></br>Information:</h2>
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                        <input type="text" placeholder="Order ID    " />
                        <button className="bg-gray-100 hover:bg-white py-2 px-4 rounded-full text-[.7em] mt-5 border-[1px] border-white] hover:border-[1.5px]">Continue to Payment</button>

                    </div>
                )}

            </div>

        </>
    )
}