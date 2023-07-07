import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/api/orders').then(response => {
            setOrders(response.data);
        });
    }, []);
    return (
        <Layout>
            <h1>Orders</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Paid</th>
                        <th>Recipient</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map(order => (
                        <tr key={order._id} className="text-[.7em]">
                            <td>{(new Date(order.createdAt)).toLocaleString()}
                            </td>
                            <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
                                {order.paid ? 'YES' : 'NO'}
                            </td>
                            <td className="recipInfo">
                                <span>{order.name} </span><br />
                                <span>{order.email}</span><br />
                                <span>{order.streetAddress}</span> <br />
                                <span>{order.city}, {order.state}, {order.zip}, {order.country}</span><br />
                            </td>
                            <td className="text-[.9em]">
                                <ol className="productsOl">
                                    {order.lineItems.map(l => (
                                        <li>
                                            {l.price_data?.product_data.name} ({l.quantity})
                                        </li>
                                    ))}
                                </ol>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}