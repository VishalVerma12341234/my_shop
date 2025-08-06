const mongoose=require('mongoose');
const catmodel=mongoose.model("category",mongoose.Schema({
    catname:{type:String,required:true},
    catpic:{type:String,required:true},
    status:{type:String,required:true}
}));
module.exports=catmodel;