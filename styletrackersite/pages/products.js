import Header from "@/components/Header";
import ProductsDisplay from "@/components/ProductsDisplay";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function ProductsPage({ products }) {
    return (
        <div>
            <Header />
            <div>
                <h1 className="text-[1.6em] p-6 ml-[10vw]">All Products</h1>
                <ProductsDisplay products={products} />
            </div>
            
        </div>
    );
};

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, { sort: { '_id': -1 } });
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    };
};