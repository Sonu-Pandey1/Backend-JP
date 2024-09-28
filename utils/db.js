require("dotenv").config();
const mongoose = require("mongoose")

// const connectDB = new mongoose.connect(URI)



const connectDB = async ()=>{
    
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        console.log(error,"database connection failed")
        process.exit(1)
        
    }
}

module.exports = connectDB;

// mongodb+srv://sonupandey:Sonu%40123@cluster1.geai8.mongodb.net/todoAppMERN?retryWrites=true&w=majority