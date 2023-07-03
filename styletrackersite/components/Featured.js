import Link from "next/link";

export default function Featured({product}) {

    function addFeaturedToCart() {

    };

    return (
        <div className="pt-[5.5em] pb-10 px-8 sm:px-5 bg-gray-800 text-white flex flex-col items-around sm:justify-around sm:flex-row">
            <div className="flex flex-col mb-5 sm:mb-0 sm:max-w-[40%] sm:justify-center sm:mb-5">
                <h1 className="text-[2.1em]">{product.title}</h1>
                <p className="text-[#aaa] text-[.8rem]">
                    {product.description}
                </p>
                <div className="buttonDiv flex my-3">
                    <Link href={`/products/${product._id}`} className="flex justify-center items-center">Read More</Link>
                    <button  onClick={addFeaturedToCart} className="flex justify-center items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                        Add to cart
                    </button>
                </div>

            </div>
            <div className="flex flex-col items-start justify-center max-w-[95%] sm:max-w-full">
                <img src="https://next-styletracker.s3.us-east-2.amazonaws.com/1688066318945.webp" className="max-w-full md:min-w-[280px] min-h-full max-h-[240px] md:max-h-[270px] rounded-lg"/>
            </div>
            
            
        </div>
    )
}