const User = require('../models/User');
const {dbConnect, dbDisconnect} = require('../db');


async function findAllUsers() {
    await dbConnect();
    
    const userData = await User.find({});
    console.log(userData)

    await dbDisconnect()
    return userData

}

module.exports = findAllUsers