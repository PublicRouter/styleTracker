import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function RecentProducts({ products }) { 
    const { addProduct } = useContext(CartContext);

    return (
        <div className="mx-5 sm:mx-10 md:mx-8 lg:mx-[4em] xl:mx-[6em] 2xl:mx-[8em]">
            <h1 className="font-serif text-[#222] text-[32px] ml-4 p-6">Newly Added Products</h1>
            <div className="grid grid-cols-2  gap-6 p-4 mx-4 text-[#222] mb-[6em] sm:grid-cols-3 md:grid-cols-4 lg:mx-[8vw]">
                {products?.length > 0 && products.map(product => (
                    <div className="">
                        <Link href={'/product/'+product._id} className="bg-white p-4 w-full rounded-lg h-[140px] lg:h-[160px] text-center flex items-center justify-center">
                            <div className="">
                                <img src={product.images[0]} className="max-w-full max-h-[80px]" alt="product image" />
                            </div>
                        </Link>
                        <div className="ml-3 mt-2">
                            <em className="text-gray-900 text-[.75em] lg:text-[1em] truncate">{product.title}</em>
                            <div className="flex flex-wrap items-center gap-2 mt-1 sm:gap-2 mb-4">
                                <b className="text-[.9em] lg:text-[1em] text-[#222]">${product.price}</b>
                                <button onClick={() => addProduct(product._id)} className="absolute ml-[14.5%] sm:ml-[10%] lg:ml-[6%] xl:ml-[8.5%] flex items-center text-[#5542F6] gap-1 w-fit border-[1px] border-[#5542F6] px-2 py-1 lg:py-[2px] rounded-lg text-[.6em] lg:text-[.7em] hover:border-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#5542F6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                                    Add to cart
                                </button>                           
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>

    )

}