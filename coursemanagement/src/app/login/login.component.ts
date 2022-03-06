import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup
  response:any
  constructor(private u_service:UsersService,private fb:FormBuilder,private router:Router) { 
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }
  loginUser(){
    console.log(this.loginform.value);
    this.u_service.loginUser(this.loginform.value)
    .subscribe((res)=>{
      if(res.role=='Professor'){
        localStorage.setItem('id',res.id);
        console.log(res.id);
        localStorage.setItem('token',res.token);
        localStorage.setItem('session',res.session);
        localStorage.setItem('myid',res.id);
       
      }
      if(res.role=='Student'){
        localStorage.setItem('id',res.id);
        console.log(res.id);
        localStorage.setItem('token',res.token);
        localStorage.setItem('session',res.session);
        localStorage.setItem('myid',res.id);
      }
    })
    this.router.navigate(['/']);
    
    
  }

}
