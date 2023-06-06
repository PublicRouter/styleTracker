// pages/api/clothing.js

const dbConnect = require('../../db/db');
const Clothing = require('../../db/models/Clothing');

export default async function handler(req, res) {
  const { method } = req;
    console.log(method)
  await dbConnect();

  switch(method) {
    case 'GET':
      try {
        const clothingType = req.query.type; // get clothing type from query string

        const clothes = await Clothing.find({ type: clothingType }); // find all clothes of specified type

        res.status(200).json({ success: true, data: clothes });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
