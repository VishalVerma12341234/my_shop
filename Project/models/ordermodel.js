const mongoose=require('mongoose');
const ordermodel=mongoose.model("proorder",mongoose.Schema({
    orderno:{type:String,required:true},
    mobile:{type:String,required:true},
    orderdate:{type:String,required:true},
    address:{type:String,required:true},
    paymentmode:{type:String,required:true},
    status:{type:String,required:true}
}));
module.exports=ordermodel;