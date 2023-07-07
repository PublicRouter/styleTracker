import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImage";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import { useContext } from "react";


export default function ProductPage({ product }) {
    const { addProduct } = useContext(CartContext);

    return (
        <>
            <Header />
            <div className="w-fit md:max-w-[800px] mx-auto px-[20px] md:px-[44px]">
                <div className="grid grid-cols-1 max-w-[350px] md:max-w-full md:grid-cols-2 gap-[40px] my-[50px]">
                    <div className="bg-white rounded-lg p-4">
                        <ProductImages images={product.images} />
                    </div>
                    <div>
                        <h1 className="text-[1.5em]">{product.title}</h1>
                        <p>{product.description}</p>
                        <div className="flex gap-3 items-center">
                            <div>
                                <span className="text-[1.4em]">${product.price}</span>
                            </div>
                            <div>
                                <button className="cartButton md:text-[.7em]" primary onClick={() => addProduct(product._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link className="mt-6 text-[#aaa] hover:text-black w-fit" href='/products'>Back</Link>

                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}