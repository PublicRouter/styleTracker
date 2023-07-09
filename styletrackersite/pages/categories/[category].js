import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";


export default function CategoriesPage({ products, categoryType }) {

    return (
        <div>
            <Header />
            <div className="p-10 lg:p-20">
                <h1 className="text-[1.5em] font-serif p-12 ml-2">Clothing Type: <b className="uppercase">{categoryType}</b></h1>
                <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 sm:p-12 md:px-[15vw] lg:grid-cols-4 lg:px-8 xl:px-[10vw] 2xl:px-[20vw]">
                    {products?.map(product => (
                        <ProductBox key={product._id} {...product} />
                    ))}
                </div>   
            </div>
            <Link className="mt-16 ml-[12vw] text-[#aaa] hover:text-black w-fit" href='/categories'>← Back To Categories</Link>
        </div>
    )
};

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { category } = context.query;
    const products = await Product.find({ "properties.type": category });

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            categoryType: JSON.parse(JSON.stringify(category))
        }
    };
};