import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-checkapplications',
  templateUrl: './checkapplications.component.html',
  styleUrls: ['./checkapplications.component.css']
})
export class CheckapplicationsComponent implements OnInit {

  constructor(private u_service:UsersService,private router:Router) { }
myid:any
Datas:any
  ngOnInit(): void {
    this.myid = localStorage.getItem('myid');
    this.u_service.stu_applications(this.myid)
    .subscribe((data)=>{
      this.Datas = data;
    })
  }
  Accept(stu_id:any,cid:any,sa:any){
    var seats = sa-1;
    console.log(stu_id,cid)
    this.u_service.accept(stu_id,cid,seats)
    .subscribe((data)=>{
      alert('Application accepted');
      this.router.navigate(['/professor']);
    })
    
  }
  Reject(stu_id:any,cid:any){
    this.u_service.reject(stu_id,cid)
    .subscribe((data)=>{
      alert('Application Rejected');
      this.router.navigate(['/professor']);
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
