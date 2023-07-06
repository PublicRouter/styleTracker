import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.json('Should be a post request!')
        return;
    }

    const { name, email, city, zip, streetAddress, country, products } = req.body;

    await mongooseConnect();

    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)];
    const productsInfo = await Product.find({ _id: uniqueIds });

    let lineItems = [];

    for (const productId of uniqueIds) {
        const productInfo = productsInfo.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId)?.length || 0;
        if (quantity > 0 && productInfo) {
            lineItems.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: { name: productInfo.title },
                    unit_amount: quantity * productInfo.price * 100,
                },
            });
        }
    }

    const orderDoc = await Order.create({
        lineItems,
        name,
        email,
        city,   
        zip,
        streetAddress,
        country,
        paid: false,
    });

    
}