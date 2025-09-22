import agriModel from "../models/agriModel.js";
import fs from 'fs'

// add agri item

const addAgri = async (req,res) =>{
    
    let image_filename = req.file ? req.file.filename : null;

    const agri = new agriModel({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      category:req.body.category,
      image: image_filename
    })

    try{
      await agri.save();
      res.json({success:true,message:"Agri Added"})
    } catch (error){
      console.log(error)
      res.json({success:false,message:"Error"})
    }
}

export{addAgri}