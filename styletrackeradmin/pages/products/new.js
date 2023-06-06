import Layout from "@/components/Layout";

export default function NewProduct() {
    return (
        <Layout>
            <h1 className="">New Product</h1>
            <input type="text" placeholder="product_name" />
            <textarea placeholder="description"></textarea>
        </Layout>
    )
}