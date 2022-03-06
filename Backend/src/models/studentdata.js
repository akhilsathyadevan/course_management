const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@akhilprojectfiles.wnbnw.mongodb.net/Course?retryWrites=true&w=majority');
const schema=mongoose.Schema;
const studentSchema= new schema({
   myid:String,
    name: String,
    email:String,
    qualification:String,
    markpercent:String,
    passout_year:String
});
var studentdata=mongoose.model('studentdatas',studentSchema);
module.exports=studentdata;

