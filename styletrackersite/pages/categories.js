import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import Head from "next/head";
import Link from "next/link";

export default function CategoriesPage({ clothingTypes }) {
    return (
        <div>
            <Head>
                <title>Categories</title>
            </Head>
            <Header />
            <div className="p-[8vw] sm: p-[13vw] md:p-[17vw]">
                <h1 className="font-serif text-[1.5em] text-center p-6">Product Categories</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:px-[100px] gap-2 mt-8 text-start md:max-w-[800px] lg:mx-auto ">
                    {clothingTypes?.map(clothingType => (

                        <Link href={`categories/${clothingType}`} className="text-[.75em] text-[#333] text-center bg-[#888] hover:bg-[#333] text-white rounded-full">
                            <div className="p-2 m-[3.5px] rounded-full bg-[#f0f0f0] text-[#333]">
                                <b>{clothingType}</b>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
};

export async function getServerSideProps() {
    await mongooseConnect();
    const clothingCategory = await Category.findOne({ name: "clothing" });
    const clothingCatProps = clothingCategory.properties;
    const clothingTypeValues = clothingCatProps.find(item => item.name === 'type').values
    console.log("running cat find: ", clothingTypeValues)
    return {
        props: {
            clothingTypes: JSON.parse(JSON.stringify(clothingTypeValues)),
        }
    };
};