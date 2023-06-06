import Link from "next/link"
import queryByType from '../../db/controllers/queryByType'

// export default function Page({ clothings }) {
//     return (
//         <div className="bg-gray-300 w-[80vw] h-[80vh]">
//             <h3 className="text-blue-600">Welcome to Dash</h3>
//             {data.map((clothing) => (
//                 <div key={clothing.id} className='p-2 m-2'>
//                     <p>{clothing.type}</p>
//                     <p>{clothing.color}</p>
//                     <p>{clothing.size}</p>
//                     <p>{clothing.material}</p>
//                     <p>{clothing.purchasedFrom}</p>
//                     <p>{clothing.price}</p>
//                 </div>
//             ))}

//         </div>
//     )
// }

// export async function getStaticProps() {
//     const clothings = queryByType("shorts")

//     return {
//         props: {
//             posts: JSON.parse(JSON.stringify(clothings)),
//         },
//     };
// }

async function getData() {
    const clothes = await queryByType("shorts");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data');
    // }

    return clothes
}

export default async function Page() {
    const clothings = await getData()
    return (
        <div className="bg-gray-300 w-[80vw] h-[80vh] flex flex-wrap">
            <h3 className="text-blue-600">Welcome to Dash</h3>
            {clothings.map((clothing) => (
                <div key={clothing.id} className='p-2 m-2 text-sm'>
                    <p>{clothing.type}</p>
                    <p>{clothing.color}</p>
                    <p>{clothing.size}</p>
                    <p>{clothing.material}</p>
                    <p>{clothing.purchasedFrom}</p>
                    <p>{clothing.price}</p>
                </div>
            ))}

        </div>
    )
}
