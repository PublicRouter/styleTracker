import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();
    await isAdminRequest(req, res)    


    if ( method === 'POST' ) {
        const { title, description, price, images, category, properties } = req.body;

        const productCreate = await Product.create({
            title,
            description,
            price,
            images,
            category,
            properties
        });

        res.json(productCreate);
    };

    if ( method === 'GET' ) {
        if ( req.query?.id) {
            res.json(await Product.findOne({_id: req.query.id}));
        } else {
            res.json(await Product.find());
        };
    };

    if ( method === 'PUT') {
        const { title, description, price, images, category, properties, _id } = req.body;
        //CANNOT CHANGE CATEGORY BACK TO UNCATEGORIZED("") DUE TO OBJECT ID TYPE
        //HOT FIX
        // if (category === '') {
        //     await Product.updateOne({ _id }, { title, description, price, images } );
        // } else {
        //     await Product.updateOne({ _id }, { title, description, price, images, category } );
        // }
        await Product.updateOne({ _id }, { title, description, price, images, category, properties } );

        res.json(true);
    };

    if ( method === 'DELETE' ) {
        if ( req.query?.id) {
            await Product.deleteOne({_id: req.query?.id});
            res.json(true);
        };
    };
    
}