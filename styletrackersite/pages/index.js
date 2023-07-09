import Featured from "@/components/Featured";
import Header from "@/components/Header";
import RecentProducts from "@/components/RecentProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Head from "next/head";

export default function HomePage({featuredProduct, recentProducts}) {
  return(
    <div>
      <Head>
        <title>StyleTracker</title>

      </Head>
      <Header />
      <Featured product={featuredProduct}/>
      <RecentProducts products={recentProducts} />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = "64a8d188302b633a2d27ab2c";
  await mongooseConnect();

  const featuredProduct = await Product.findById(featuredProductId);
  const recentProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
  console.log(recentProducts)
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      recentProducts: JSON.parse(JSON.stringify(recentProducts)),
    },
  }
  
}