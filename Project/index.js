const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const multer=require('multer');
const catmodel = require('./models/catmodel');
const con=mongoose.connect("mongodb+srv://Vishal:DZ3sUzq8xuIAFm5g@cluster0.6vtis9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
con.then(()=>{
    console.log("DB Connection Done");
});
con.catch(()=>{
    console.log("Error in Connection");
});
const app=express();
app.use(express.json());
app.use(cors());
// creating filter
const myfilter=(req,file,cb)=>{
    const ext=file.mimetype.split('/')[1];
    if(ext==="jpg" || ext==="jpeg" || ext==="png" || ext==="gif"){
        cb(null,true);
    }
    else{
        cb("Not a valid image",false);git --
    }
}
const catstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./catpics");
    },
    filename:(req,file,cb)=>{
        const ext=file.mimetype.split('/')[1];
        cb(null,"catpic_"+Date.now()+"."+ext);
    }
});
const uploadcat=multer({
    storage:catstorage,
    fileFilter:myfilter
});
app.post("/category",uploadcat.single("cpic"),async(req,res)=>{
    const re =  new catmodel({
    catname:req.body.catname,
    catpic:req.file.filename,
    status:"Active"
});
if(await re.save())
{
    res.json({msg:"Category saved"});
}
else{
res.json({msg:"Catagory not saved"});
}
});
app.get("/category",async(req,res)=>{ 
    const re  = await catmodel.find();
    res.json(re);
});
app.delete("/category",async(req,res)=>{
    
});
app.put("/category",async(req,res)=>{
   
});
app.listen(7000,()=>{
    console.log("Server Started");
});