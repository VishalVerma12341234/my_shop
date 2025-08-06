const mongoose=require('mongoose');
const customermodel=mongoose.model("customer",mongoose.Schema({
    mobile:{type:String,required:true},
    name:{type:String,required:false},
    otp:{type:String,required:true},
    address:{type:String,required:false},
    status:{type:String,required:true}
}));
module.exports=customermodel;