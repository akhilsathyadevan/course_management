import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-applycourse',
  templateUrl: './applycourse.component.html',
  styleUrls: ['./applycourse.component.css']
})
export class ApplycourseComponent implements OnInit {

  constructor(private u_service:UsersService,private router:Router) { }
Courses:any
myid:any
StudentProfile:any
  ngOnInit(): void {
    this.myid = localStorage.getItem('myid');
    this.u_service.getcourses()
    .subscribe((data)=>{
      this.Courses = data;
      console.log("data is",data)
    })
    console.log(this.myid)
    this.u_service.getstudentprofile(this.myid)
 
    .subscribe((pdata)=>{
      this.StudentProfile = pdata;
      console.log('profile is',this.StudentProfile)
    })
  }
  apply(course:any){
    console.log(course);
    this.u_service.applied(this.StudentProfile,course)
    .subscribe((data)=>{
      alert("Successfully applied for acourse");
      this.router.navigate(['/view'])
    })
  }

}
