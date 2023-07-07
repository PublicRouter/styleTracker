import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
    try {
        await mongooseConnect();
    }catch(err) {
        console.log(err)
    }

    const ids = req.body.ids;
    res.json(await Product.find({_id: ids}));
};