import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://huynhtranainu_db_user:PU4yvKmGKiWX83N0@cluster0.a281lm4.mongodb.net/backend').then(()=>
      console.log("DB Connected"));
}