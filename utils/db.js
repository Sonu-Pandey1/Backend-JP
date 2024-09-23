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