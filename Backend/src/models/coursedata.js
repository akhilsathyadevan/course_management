const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@akhilprojectfiles.wnbnw.mongodb.net/Course?retryWrites=true&w=majority');
const schema=mongoose.Schema;
const courseSchema= new schema({
    pid:String,
    cname: String,
    cd:String,
    cf:String,
    cdu:String,
    sa:String
});
var Coursedata=mongoose.model('coursedatas',courseSchema);
module.exports=Coursedata;