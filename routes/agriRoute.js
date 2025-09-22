import express from "express"
import { addAgri } from "../controllers/agriController.js"
import multer from "multer"

const agriRouter = express.Router();


// Image Storage Engine

const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    return cb(null,`${Date.now()}${file.originalname}`)
  }
})

const upload = multer({storage:storage})

agriRouter.post("/add",upload.single("image"),addAgri)




export default agriRouter;
