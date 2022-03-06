import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private u_service:UsersService,private router:Router) { }
myid:any
Data:any
  ngOnInit(): void {
this.myid = localStorage.getItem('myid');
this.u_service.getprofessor(this.myid)
.subscribe((data)=>{
this.Data = data;
console.log(data);
})

  }
delete(){
  this.u_service.delete(this.myid)
  .subscribe((data)=>{
    alert('Profile deleted');
    this.router.navigate(['/']);
  })
}
}
