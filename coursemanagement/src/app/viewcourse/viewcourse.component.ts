import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private u_service:UsersService,private router:Router) { }
Courses:any
  ngOnInit(): void {
    var myid = localStorage.getItem('myid');
    this.u_service.getcourse(myid)
    .subscribe((data)=>{
      this.Courses = data;
    })
  }
  delete(){
    var myid = localStorage.getItem('myid');
    this.u_service.delete(myid)
    .subscribe((data)=>{
      alert('Profile deleted');
      this.router.navigate(['/']);
    })
  }
}
