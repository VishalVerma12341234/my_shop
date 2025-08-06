const mongoose=require('mongoose');
const subcatmodel=mongoose.model("subcategory",mongoose.Schema({
    catid:{type:String,required:true},
    subcatname:{type:String,required:true},
    subcatpic:{type:String,required:true},
    status:{type:String,required:true}
}));
module.exports=subcatmodel;
