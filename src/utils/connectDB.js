import mongoose from "mongoose";

async function connectDB(){
    const test="mongodb+srv://amirrasooli69:aammiirr69@cluster0.j1hazht.mongodb.net/?retryWrites=true&w=majority"
    if(mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery", false);
    console.log("////////////////////////////////////////////////////")

    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(test);
    console.log("Connected To DB");
}

export default connectDB;