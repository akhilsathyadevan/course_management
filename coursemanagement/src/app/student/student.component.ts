import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private u_service : UsersService,private router:Router) { }
myid:any
Data:any
  ngOnInit(): void {
this.myid = localStorage.getItem('myid');
this.u_service.getstudentprofile(this.myid)
.subscribe((data)=>{
  if(data){
    this.Data = data;
  }
  else{
    alert('You need to create a student profile first')
    this.router.navigate(['/adds'])
  }
})
  }

}
