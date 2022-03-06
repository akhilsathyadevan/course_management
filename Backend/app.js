const express=require('express');
const app= new express();
const signupdata=require('./src/models/signupdata')
const cors= require('cors');
const bodyparser=require('body-parser');
const port=process.env.PORT || 3000;
const jwt= require('jsonwebtoken');
const professordata = require('./src/models/professordata');
const studentdata = require('./src/models/studentdata');
const coursedata = require('./src/models/coursedata');
const applications = require('./src/models/applications');
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});
app.post('/signup',function(req,res){
    console.log(req.body.user);
    
    var x={
        name:req.body.user.name,
        email:req.body.user.email,
        phone:req.body.user.phone,
        role:req.body.user.role,
        password:req.body.user.password,
        password1:req.body.user.password1
    }
    var n=new signupdata(x)
    n.save();
})

app.post("/login",function(req,res){
    let session='';
    let role='';
    console.log("from frontend"+req.body.user.email,req.body.user.password);
    console.log("enterd")
    signupdata.findOne({'email': req.body.user.email, 'password': req.body.user.password })
         .then(function (obj,err) 
         {
            if (obj != null)
             {
                 if(obj.role=='Professor'){
                    console.log("entered professor session");
                    let id = obj._id;
                    let role=obj.role;
                    console.log(obj._id);
                    let uname=req.body.user.email;
                    let pswd=req.body.user.password;
                    let payload = {subject:uname+pswd}
                    let token = jwt.sign(payload,'secretKey')
                     session ='professorsession';
                    res.status(200).send({token,session,id,role});
                    console.log({token,session,role,id})

                 }
                if(obj.role=='Student'){
                    console.log("entered student session");
                    let id = obj._id;
                    let role=obj.role;
                    console.log(obj._id);
                    let uname=req.body.user.email;
                    let pswd=req.body.user.password;
                    let payload = {subject:uname+pswd}
                    let token = jwt.sign(payload,'secretKey')
                     session ='studentsession';
                    res.status(200).send({token,session,id,role});
                    console.log({token,session,role})

                }
                
             }
            else{
                let message = 'No User Found'
                res.status(401).send({ message })
            }
        })
    
        .catch((err) => {
        console.log('Error: ' + err);
        })
    
})
app.post('/addprofessor',function(req,res){
    console.log("entered to professor section");
    console.log(req.body.user);
    var newdata={
        c_id:req.body.id,
        name: req.body.user.name,
        email:req.body.user.email,
        qualification:req.body.user.qualification,
        working:req.body.user.working,
        Current_Job_Position:req.body.user.Current_Job_Position,
        previous_experience:req.body.user.previous_experience
    }
    console.log(newdata);
    var professor=new professordata(newdata);
    professor.save()
    .then((data)=>{
        res.send(data);    })
        .catch((err)=>{
            console.log(err);
        })
})
app.post('/addstudent',function(req,res){
    console.log("entered to student section");
    console.log(req.body.user);
    var student={
        myid:req.body.id,
        name: req.body.user.name,
        email:req.body.user.email,
        qualification:req.body.user.qualification,
        markpercent: req.body.user.markpercent,
        passout_year:req.body.user.passout_year

    }
    var x=new studentdata(student);
    x.save()
    .then((data)=>{
        res.send(data);
    })
})
app.post('/accept',function(req,res){
    var stu_id = req.body.stu_id;
    var cid = req.body.cid;
    var seats = req.body.seats;
    console.log(seats)
    var status = 'Accepted'
    applications.findOneAndUpdate({'cid':cid,'student_id':stu_id},{$set:{'status':status}},{new:true})
    .then((data)=>{
        console.log(data);
    })
    applications.findOneAndUpdate({'cid':cid,'student_id':stu_id},{$set:{'sa':seats}},{new:true})
    .then((data)=>{
        console.log(data);
    })
    coursedata.findOneAndUpdate({'_id':cid},{$set:{'sa':seats}},{new:true})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.post('/reject',function(req,res){
    var stu_id = req.body.stu_id;
    var cid = req.body.cid;
    var seats = req.body.seats;
    var status = 'Rejected'
    applications.findOneAndUpdate({'cid':cid,'student_id':stu_id},{$set:{'status':status}},{new:true})
    .then((data)=>{
        res.send(data);
    })
})
app.get('/getnotifications',function(req,res){
    var sta_tus='Accepted';
    console.log('enterd for getting notificationsss')
    applications.find({'status':sta_tus})
    .then((data)=>{
        console.log(data);
        res.send(data);
    })
})
app.get('/students',function(req,res){
    studentdata.find()
    .then(function(student){
        res.send(student);
    })
})
app.get('/getprofessor/:id',function(req,res){
    professordata.findOne({'c_id':req.params.id})
    .then(function(data){
        res.send(data);
    })
})
app.get('/getdata/:id',function(req,res){
    signupdata.findOne({'_id':req.params.id})
    .then(function(data){
        res.send(data);
        console.log(data)
    })
})
app.get('/getcourse/:id',function(req,res){
    coursedata.find({'pid':req.params.id})
    .then(function(data){
        res.send(data);
        console.log(data)
    })
})
app.get('/getallcourses',function(req,res){
    coursedata.find()
    .then(function(data){
        res.send(data);
        console.log(data)
    })
})

app.get('/getstudentprofile/:id',function(req,res){
    console.log('id is',req.params.id)
    studentdata.findOne({'myid':req.params.id})
    .then(function(data){
        res.send(data);
        console.log('student profile is',data)
    })
})

app.get('/getmyapplications/:id',function(req,res){
    console.log('id is',req.params.id)
    applications.find({'student_id':req.params.id})
    .then(function(data){
        res.send(data);
       
    })
})

app.get('/stu_applications/:id',function(req,res){
    console.log('id is',req.params.id)
    applications.find({'pid':req.params.id})
    .then(function(data){
        res.send(data);
        console.log(data)
    })
})
app.get('/delete/:id',function(req,res){
    professordata.deleteOne({'c_id':req.params.id})
    .then((data)=>{
        res.send(data)
    })
})
app.post('/addcourse',function(req,res){
    console.log("entered to course section");
    console.log(req.body.coursedata);
    var course={
        pid:req.body.id,
        cname: req.body.coursedata.cname,
        cd:req.body.coursedata.cd,
        cf:req.body.coursedata.cf,
        cdu: req.body.coursedata.cdu,
        sa:req.body.coursedata.sa

        
    }
    console.log(course)
    var x=new coursedata(course);
    x.save()
    .then((data)=>{
        res.send(data);
    })
})
app.post('/applied',function(req,res){
    console.log(req.body.profile);
    console.log(req.body.course);
    var thisstatus = 'applied';
    var application = {
        cid:req.body.course._id,
        pid:req.body.course.pid,
        cname: req.body.course.cname,
        sa:req.body.course.sa,
        student_id:req.body.profile.myid,
        student_name:req.body.profile.name,
        qualification:req.body.profile.qualification,
        perc:req.body.profile.markpercent,
        year:req.body.profile.passout_year,
        status:thisstatus,
        cf:req.body.course.cf,
        cdu:req.body.course.cdu
    }
    console.log(application);
    var x=new applications(application);
    x.save()
    .then((data)=>{
        res.send(data);
    })
})
app.listen(port,()=>{console.log('server at '+port)});