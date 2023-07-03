import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
    const { cartProducts } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(res => {
                    setProducts(res.data);
                })
        }
    }, [cartProducts])

    return (
        <>
            <Header />
            <div className="flex items-center sm:items-start flex-col sm:flex-row sm:m-10 gap-6 min-h-[300px]">
                <div className="mt-8 sm:mt-0 w-[90%] sm:w-[60%] h-full bg-white rounded-lg p-[30px]">
                    {!cartProducts?.length && (
                        <div className="">
                            Your Cart is Empty!
                        </div>
                    )}
                    {products?.length > 0 && (
                        <div>
                            <h2>Cart Items: </h2>
                            {products.map(product => (
                                <h4>{product.title}</h4>
                            ))}
                        </div>
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