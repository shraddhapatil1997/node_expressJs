import mongoose from "mongoose";
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://shraddhapatil2029:Vish%402029@cluster0.m14tscd.mongodb.net/foodOrder?retryWrites=true&w=majority"
        )
        console.log(`MongoDB Connected:${connect.connection.host}`)
    } catch(e){
        console.log(`Error:${e.message}`)
        process.exit(1)
    }
}
export default connectDB