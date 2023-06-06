// import { NextResponse } from "next/server"
// // const dbConnect = require('../../../db/db');
// // const Clothing = require('../../../db/models/Clothing'); 


// export function GET(request) {
//   try {
//     const query = request.query.type;
//     const clothes = {
//       id: 1,
//       type: query,
//       color: 'blue',
//       size: 'l',
//       price: 12.99
//     }
//     // await dbConnect();
//     // const clothes = await Clothing.find({ type: query });
//     return NextResponse.json({data: clothes});
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, 500);
//   }
// }

// async function getData() {
//   const res = await fetch('https://api.example.com/...');
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
 
//   return res.json();
// }
 
// export default async function Page() {
//   const data = await getData();
 
//   return <main></main>;
// }
