import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  studentform:FormGroup

  constructor(private u_service:UsersService,private fb:FormBuilder,private router:Router) {

    
    this.studentform=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      qualification:['',[Validators.required]],
      markpercent:['',[Validators.required]],
      passout_year:['',[Validators.required]]
    })
   }
   Data:any
   myid:any
  ngOnInit(): void {
    this.myid = localStorage.getItem('myid');
    this.u_service.getdata(this.myid)
    .subscribe((data)=>{
      this.Data = data;
    })
    this.u_service.getstudentprofile(this.myid)
    .subscribe((data)=>{
      if(data){
        alert('Student already had a profile')
        this.router.navigate(['/student'])
      }
    })
  }
  addStudent(){
    console.log(this.studentform.value)
    this.u_service.addStudent(this.studentform.value,this.myid)
    .subscribe((data)=>{
      alert('Student added');
      this.router.navigate(['student']);
    })  
  }

}
