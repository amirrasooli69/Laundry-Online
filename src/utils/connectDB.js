import mongoose from "mongoose";

async function connectDB(){
    if(mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery", false);
    console.log("////////////////////////////////////////////////////")
    console.log(process.env.MONGO_URI)
    console.log(typeof(process.env.MONGO_URI))
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To DB");
}

export default connectDB;