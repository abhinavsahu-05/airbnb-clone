import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        const dbConnect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Databse connection done");
        
    } catch (error) {
        console.log(`Databse connection error ${error}`);
        
    }
}

export default connectDb