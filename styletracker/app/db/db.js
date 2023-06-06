// lib/dbConnect.js

const mongoose = require('mongoose');
// import {mongoose} from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect("mongodb://localhost:27017/styleDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection)

}

async function dbDisconnect() {
  if (connection.isConnected) {
    await mongoose.disconnect()
  }
}
// dbConnect()
// console.log(connection)

module.exports = {dbConnect, dbDisconnect};
