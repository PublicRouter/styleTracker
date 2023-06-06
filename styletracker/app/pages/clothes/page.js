
// import queryByType from "../../db/controllers/queryByType"
// import queryByUser from "../../db/controllers/queryByUser"
// const Clothing = require('../../db/models/Clothing');
// const {dbConnect, dbDisconnect} = require('../../db/db');


// async function getClothingByType(clothingType) {
//     await dbConnect();
    
//     const clothingTypeList = await Clothing.find({type:clothingType});
//     console.log(clothingTypeList)

//     await dbDisconnect()
//     return clothingTypeList

// }

// async function getAllClothing() {
//     await dbConnect();
    
//     const clothingTypeList = await Clothing.find({});
//     console.log(clothingTypeList)

//     await dbDisconnect()
//     return clothingTypeList

// }


import ClothingDisplay from "./components/clothingDisplay/page"

export default function Clothes() {

    return (
        <div className="bg-gray-300 w-[80vw] h-[80vh]">
            <h3 className="text-blue-600">Welcome to Clothing Page</h3>
            <ClothingDisplay />  
        </div>
    )
}