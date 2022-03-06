const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@akhilprojectfiles.wnbnw.mongodb.net/Course?retryWrites=true&w=majority');
const schema=mongoose.Schema;
const signupSchema= new schema({
    name: String,
    email:String,
    phone:String,
    role:String,
    password:String,
    password1:String
});
var Signupdata=mongoose.model('signupdatas',signupSchema);
module.exports=Signupdata;