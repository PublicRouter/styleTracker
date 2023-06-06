import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();

    if ( method === 'POST' ) {
        const { title, description, price } = req.body;

        const productCreate = await Product.create({
            title,
            description,
            price
        });

        res.json(productCreate);
    }

    if ( method === 'GET' ) {
        res.json(await Product.find())
    }
}