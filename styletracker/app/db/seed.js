const mongoose = require('mongoose');
const {dbConnect, dbDisconnect} = require('./db');
const User = require('./models/User');
const Clothing = require('./models/Clothing');

async function seedDB() {
  await dbConnect();
  
  // Start by deleting all existing data
  await User.deleteMany({});
  await Clothing.deleteMany({});

  // Define some seed data
  const users = [
    { name: 'John Doe', email: 'john@example.com', password: 'password' },
    { name: 'Jane Doe', email: 'jane@example.com', password: 'password' },
    { name: 'Molly Doe', email: 'mollydoe@example.com', password: 'password' },

  ];

  const clothes = [
    { type: 'shirt', color: 'blue', size: 'M', material: 'cotton', price: 20, purchasedFrom: 'Store A' },
    { type: 'pants', color: 'black', size: 'L', material: 'denim', price: 50, purchasedFrom: 'Store B' },
    { type: 'longsleeve', color: 'white', size: 'S', material: 'cotton', price: 25, purchasedFrom: 'Store C' },
    { type: 'shorts', color: 'gray', size: 'M', material: 'linen', price: 30, purchasedFrom: 'Store D' },
    { type: 'dress', color: 'pink', size: 'L', material: 'satin', price: 60, purchasedFrom: 'Store E' },
    { type: 'skirt', color: 'black', size: 'M', material: 'leather', price: 40, purchasedFrom: 'Store F' },
    { type: 'tanktop', color: 'red', size: 'S', material: 'polyester', price: 15, purchasedFrom: 'Store G' },
    { type: 'swimsuit', color: 'blue', size: 'M', material: 'nylon', price: 35, purchasedFrom: 'Store H' },
    { type: 'shirt', color: 'green', size: 'L', material: 'cotton', price: 22, purchasedFrom: 'Store I' },
    { type: 'pants', color: 'brown', size: 'XL', material: 'wool', price: 55, purchasedFrom: 'Store J' },
    { type: 'longsleeve', color: 'black', size: 'S', material: 'cotton', price: 28, purchasedFrom: 'Store K' },
    { type: 'shorts', color: 'blue', size: 'M', material: 'denim', price: 30, purchasedFrom: 'Store L' },
    { type: 'dress', color: 'purple', size: 'L', material: 'chiffon', price: 65, purchasedFrom: 'Store M' },
    { type: 'skirt', color: 'gray', size: 'S', material: 'cotton', price: 35, purchasedFrom: 'Store N' },
    { type: 'tanktop', color: 'white', size: 'M', material: 'modal', price: 18, purchasedFrom: 'Store O' },
    { type: 'swimsuit', color: 'black', size: 'L', material: 'spandex', price: 40, purchasedFrom: 'Store P' },
    { type: 'shirt', color: 'red', size: 'S', material: 'polyester', price: 23, purchasedFrom: 'Store Q' },
    { type: 'pants', color: 'navy', size: 'XL', material: 'cotton', price: 48, purchasedFrom: 'Store R' },
    { type: 'longsleeve', color: 'blue', size: 'M', material: 'wool', price: 30, purchasedFrom: 'Store S' },
    { type: 'shorts', color: 'green', size: 'S', material: 'linen', price: 25, purchasedFrom: 'Store T' },
    { type: 'dress', color: 'black', size: 'L', material: 'velvet', price: 70, purchasedFrom: 'Store U' },
    { type: 'skirt', color: 'red', size: 'M', material: 'satin', price: 45, purchasedFrom: 'Store V' },
    { type: 'tanktop', color: 'pink', size: 'XL', material: 'cotton', price: 20, purchasedFrom: 'Store W' },
    { type: 'swimsuit', color: 'purple', size: 'S', material: 'nylon', price: 38, purchasedFrom: 'Store X' },
    { type: 'shirt', color: 'yellow', size: 'M', material: 'cotton', price: 19, purchasedFrom: 'Store Y' },
    { type: 'pants', color: 'gray', size: 'L', material: 'polyester', price: 52, purchasedFrom: 'Store Z' },
    { type: 'longsleeve', color: 'white', size: 'S', material: 'cotton', price: 27, purchasedFrom: 'Store A1' },
    { type: 'shorts', color: 'black', size: 'M', material: 'denim', price: 32, purchasedFrom: 'Store B1' },
    { type: 'dress', color: 'blue', size: 'L', material: 'silk', price: 75, purchasedFrom: 'Store C1' },
    { type: 'skirt', color: 'gray', size: 'S', material: 'wool', price: 38, purchasedFrom: 'Store D1' },
    { type: 'tanktop', color: 'black', size: 'M', material: 'cotton', price: 16, purchasedFrom: 'Store E1' },
    { type: 'swimsuit', color: 'red', size: 'L', material: 'spandex', price: 42, purchasedFrom: 'Store F1' },
    { type: 'shirt', color: 'green', size: 'S', material: 'polyester', price: 21, purchasedFrom: 'Store G1' },
    { type: 'pants', color: 'blue', size: 'XL', material: 'denim', price: 58, purchasedFrom: 'Store H1' },
    { type: 'longsleeve', color: 'black', size: 'M', material: 'cotton', price: 26, purchasedFrom: 'Store I1' },
    { type: 'shorts', color: 'gray', size: 'S', material: 'linen', price: 28, purchasedFrom: 'Store J1' },
    { type: 'dress', color: 'purple', size: 'L', material: 'chiffon', price: 68, purchasedFrom: 'Store K1' },
    { type: 'skirt', color: 'blue', size: 'M', material: 'cotton', price: 42, purchasedFrom: 'Store L1' },
    { type: 'tanktop', color: 'white', size: 'XL', material: 'modal', price: 17, purchasedFrom: 'Store M1' },
    { type: 'swimsuit', color: 'black', size: 'S', material: 'nylon', price: 36, purchasedFrom: 'Store N1' },
    { type: 'shirt', color: 'red', size: 'M', material: 'polyester', price: 24, purchasedFrom: 'Store O1' },
    { type: 'pants', color: 'navy', size: 'L', material: 'cotton', price: 53, purchasedFrom: 'Store P1' },
    { type: 'longsleeve', color: 'blue', size: 'XL', material: 'wool', price: 32, purchasedFrom: 'Store Q1' },
    { type: 'shorts', color: 'green', size: 'S', material: 'linen', price: 26, purchasedFrom: 'Store R1' },
    { type: 'dress', color: 'black', size: 'M', material: 'velvet', price: 72, purchasedFrom: 'Store S1' },
    { type: 'skirt', color: 'red', size: 'L', material: 'satin', price: 48, purchasedFrom: 'Store T1' },
    { type: 'tanktop', color: 'pink', size: 'M', material: 'cotton', price: 18, purchasedFrom: 'Store U1' },
    { type: 'swimsuit', color: 'purple', size: 'XL', material: 'nylon', price: 40, purchasedFrom: 'Store V1' },
    { type: 'shirt', color: 'yellow', size: 'S', material: 'cotton', price: 17, purchasedFrom: 'Store W1' },
    { type: 'pants', color: 'gray', size: 'M', material: 'polyester', price: 50, purchasedFrom: 'Store X1' },
    { type: 'longsleeve', color: 'white', size: 'XL', material: 'cotton', price: 29, purchasedFrom: 'Store Y1' },
    { type: 'shorts', color: 'black', size: 'S', material: 'denim', price: 34, purchasedFrom: 'Store Z1' },
    { type: 'dress', color: 'blue', size: 'M', material: 'silk', price: 68, purchasedFrom: 'Store A2' },
    { type: 'skirt', color: 'gray', size: 'L', material: 'wool', price: 40, purchasedFrom: 'Store B2' },
    { type: 'tanktop', color: 'black', size: 'M', material: 'cotton', price: 15, purchasedFrom: 'Store C2' },
    { type: 'swimsuit', color: 'red', size: 'XL', material: 'spandex', price: 38, purchasedFrom: 'Store D2' }
  ]
  ;

  // Insert the data into the database
  for (let userData of users) {
    let user = new User(userData);
    for(let clothingData of clothes) {
      let clothing = new Clothing({...clothingData, owner: user._id});
    //   user.clothes.push(clothing);
      await clothing.save();
    }
    await user.save();
  }

  await dbDisconnect()
  
  console.log('Database seeded!');
}

// Run the seed function
seedDB();
