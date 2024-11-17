const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully");
    }catch(err){
        console.log("Database connection error:", err);
    }
}

module.exports = connectDB