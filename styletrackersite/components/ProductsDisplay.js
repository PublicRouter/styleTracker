import ProductBox from "./ProductBox";

export default function ProductsDisplay({ products }) {
    return (
        <div className="productsDisplay p-4 sm:p-14 my-10 mt-0 grid grid-cols-2 mx-8 sm:mx-3 sm:grid-cols-3 gap-8 md:gap-4 md:grid-cols-4 lg:mx-24 xl:mx-[15vw] 2xl:mx-[22vw]">
            {products?.length > 0 && products.map(product => (
                <ProductBox key={product._id} {...product} />
            ))}
        </div>
    );
};