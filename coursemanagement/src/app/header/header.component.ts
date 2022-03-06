import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myid:any
  constructor(private u_service:UsersService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.myid=localStorage.getItem('myid');
  }
viewprofessor(){
  this.u_service.getprofessor(this.myid)
  .subscribe((data)=>{
    if(data){
      this.router.navigate(['/professor"'])
    }
    else{
      alert('First create a professor profile')
      this.router.navigate(['/addp']);
    }
  })
}
logout(){
localStorage.removeItem('myid');
localStorage.removeItem('id');
localStorage.removeItem('session');
localStorage.removeItem('token');
}
}
