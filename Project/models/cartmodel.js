const mongoose=require('mongoose');
const cartmodel=mongoose.model("cart",mongoose.Schema({
    mobile:{type:String,required:true},
    proid:{type:String,required:true},
    quantuty:{type:String,required:true}
}));
module.exports=cartmodel;