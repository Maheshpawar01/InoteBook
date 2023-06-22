const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://maheshp8767:ZBBEiTA7aFHiP65l@cluster0.phguree.mongodb.net/";

// const connectToMongo =()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to mongo successfully")
//     })
// }
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
