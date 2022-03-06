import { Component, getNgModuleById, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprofessor',
  templateUrl: './addprofessor.component.html',
  styleUrls: ['./addprofessor.component.css']
})
export class AddprofessorComponent implements OnInit {
  professorform:FormGroup

  constructor(private u_service:UsersService,private fb:FormBuilder,private router:Router) { 
    this.professorform=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      qualification:['',[Validators.required]],
      working:['',[Validators.required]],
      Current_Job_Position:['',[Validators.required]],
      previous_experience:['',[Validators.required]]
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
    this.u_service.getprofessor(this.myid)
    .subscribe((data)=>{
      if(data){
        alert('Professor already had a profile')
        this.router.navigate(['/professor'])
      }

    })
  }
 addProfessor(){
   console.log(this.professorform.value)
   this.u_service.addProfessor(this.professorform.value,this.myid)
   .subscribe((data)=>{
     alert ("Professor details added");
     this.router.navigate(['/professor'])
   })
 } 

}
