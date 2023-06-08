import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProduct() {
    const [productInfo, setProductInfo] = useState();

    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id=' + id).then((res) => {
            setProductInfo(res.data)

        })
    })

    function goBack() {
        router.push('/products');
    };

    async function deleteProduct() {
        await axios.delete('/api/products?id='+id);
        goBack()
    }

    return (
        <Layout>
            <h1 className="text-center mt-[6vh]">Do you really want to delete "{productInfo?.title}" ?</h1>
            <div className="flex gap-2 p-1 justify-center">
                <button className="btn-red" onClick={deleteProduct}>Yes</button>
                <button className="btn-def" onClick={goBack}>No</button>
            </div>
        </Layout>
    )
}