import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";


export default function ProductBox({ _id, title, description, price, images }) {
    const { addProduct } = useContext(CartContext);
    const url = '/product/' + _id;
    return (
        <div className="">
            <Link className="bg-[#fff] p-6 h-[120px] text-center flex items-center justify-center rounded-lg " href={url}>
                <div>
                    <img className="max-w-full max-h-[80px]" src={images?.[0]} alt="" />
                </div>
            </Link>
            <div className="mt-2">
                <Link className="font-semibold text-[.9rem] text-inherit no-underline m-0" href={url}>{title}</Link>
                <div className="block md:flex md:gap-1 items-center justify-between mt-1">
                    <span className="text-[1rem] font-medium text-right md:text-[2.2vw] lg:text-[1.8vw] md:font-semibold md:text-left">
                        ${price}
                    </span>
                    <button className="cartButton text-[.5em] sm:text-[.6em]" block onClick={() => addProduct(_id)} primary outline>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};