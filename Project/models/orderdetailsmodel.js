const mongoose=require('mongoose');
const orderdetailsmodel=mongoose.model("orderdetails",mongoose.Schema({
    orderno:{type:String,required:true},
    proid:{type:String,required:true},
    pname:{type:String,required:true},
    price:{type:String,required:true},
    propic:{type:String,required:true},
    quintity:{type:String,required:true},
}));
module.exports=orderdetailsmodel;