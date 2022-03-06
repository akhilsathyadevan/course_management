import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courseform:any
  constructor(private u_service:UsersService,private fb:FormBuilder,private router:Router) {
    this.courseform=this.fb.group({
      cname:['',[Validators.required]],
      cd:['',[Validators.required]],
      cf:['',[Validators.required]],
      cdu:['',[Validators.required]],
      sa:['',[Validators.required]],
    })
   }
myid:any
  ngOnInit(): void {
    this.myid = localStorage.getItem('myid')
  }
  addCourse(){
    this.u_service.addcourse(this.courseform.value,this.myid)
    .subscribe((data)=>{
      alert('Course added');
      this.router.navigate(['/professor'])
    })
  }
}
