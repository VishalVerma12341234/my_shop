const mongoose=require('mongoose');
const productmodel=mongoose.model("product",mongoose.Schema({
    subcatid:{type:String,required:true},
    pname:{type:String,required:true},
    price:{type:String,required:true},
    offerprice:{type:String,required:true},
    propic:{type:String,required:true},
    description:{type:String,required:true},
    stock:{type:String,required:true},
    status:{type:String,required:true}
}));
module.exports=productmodel;