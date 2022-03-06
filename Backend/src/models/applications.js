const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@akhilprojectfiles.wnbnw.mongodb.net/Course?retryWrites=true&w=majority');
const schema=mongoose.Schema;
const AppSchema= new schema({
    cid:String,
    pid:String,
    cname: String,
    sa:String,
    student_id:String,
    student_name:String,
    qualification:String,
    perc:String,
    year:String,
    status:String,
    cf:String,
    cdu:String
});
var Appdata=mongoose.model('applications',AppSchema);
module.exports=Appdata;