const Clothing = require('../models/Clothing');
const { dbConnect, dbDisconnect } = require('../db');


async function findClothingType(clothingType) {
    await dbConnect();

    const clothingTypeList = await Clothing.find({ type: clothingType });
    console.log(clothingTypeList)

    await dbDisconnect()
    return clothingTypeList

}



module.exports = findClothingType
// findClothingType("shirt")
