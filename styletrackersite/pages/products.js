import Header from "@/components/Header";
import ProductsDisplay from "@/components/ProductsDisplay";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Head from "next/head";

export default function ProductsPage({ products }) {
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>
            <Header />
            <div>
                <h1 className="font-serif text-[1.6em] p-6 mt-4 ml-[10vw] 2xl:ml-0 2xl:text-[2em] 2xl:text-center 2xl:mt-8">All Products</h1>
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