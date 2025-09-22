import mongoose from "mongoose";

const agriSchema = new mongoose.Schema({
  name: {type:String,required:true},
  description:{type:String,required:true},
  price:{type:Number,required:true},
  image:{type:String,required:true},
  category:{type:String,required:true}
})

const agriModel = mongoose.models.agri || mongoose.model("agri", agriSchema);

export default agriModel;
