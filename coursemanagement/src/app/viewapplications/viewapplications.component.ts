import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewapplications',
  templateUrl: './viewapplications.component.html',
  styleUrls: ['./viewapplications.component.css']
})
export class ViewapplicationsComponent implements OnInit {

  constructor(private u_service:UsersService,private router:Router) { }
myid:any
Datas:any
  ngOnInit(): void {
    this.myid = localStorage.getItem('myid')
    this.u_service.getmyapplications(this.myid)
    .subscribe((data)=>{
      this.Datas = data
    })
  }

}
