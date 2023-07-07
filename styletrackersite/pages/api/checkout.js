import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require('stripe')(process.env.STRIPE_SK);


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.json('Should be a post request!')
        return;
    }

    const { name, email, city, zip, streetAddress, country, cartProducts } = req.body;

    await mongooseConnect();

    const productsIds = cartProducts;
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
                    unit_amount: productInfo.price * 100,
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

    const session = await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
        metadata: { orderId: orderDoc._id.toString(), test: 'ok' },
    });

    console.log("stripe session object: ", session)

    res.json({
        url: session.url,
    });
}