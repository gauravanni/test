var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema= new Schema({
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

module.exports=mongoose.model('User',UserSchema);
