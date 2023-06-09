import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handler(req, res){
    const {method} = req;
    await mongooseConnect();

    if ( method === 'GET') {
        res.json(await Category.find());
    };

    if ( method === 'POST') {
        const {name, parentCategory} = req.body;
        const categoryDoc = await Category.create({name, parent: parentCategory,});
        res.json(categoryDoc)
    };
};