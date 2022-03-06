import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private u_service:UsersService,private router:Router) { }
Notifications:any
  ngOnInit(): void {
    
  }
  shownotifications(){
    // this.toastr.success('Hello Akhil');
    this.u_service.getnotifications()
    .subscribe((data)=>{
      this.Notifications = data;
      console.log(data);  })
    this.router.navigate(['/noti'])  
  }   
}
