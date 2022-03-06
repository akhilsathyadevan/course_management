import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup

  constructor(private u_service:UsersService ,private fb:FormBuilder,private router :Router) {
    this.signupform=this.fb.group({
      name:['',Validators.required,Validators.minLength(5)],
      email:['',Validators.required,Validators.compose([Validators.pattern('^[a-zA-Z0-9.%+]+@[a-z0-9.-]+.[a-z]{2,4}')])],
      phone:['',Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/[0-9]/)],
      role:['',Validators.required],
      password:['',Validators.required, Validators.minLength(8),Validators.pattern(/[A-Z]/),
      Validators.pattern(/[a-z]/),
      Validators.pattern(/[0-9]/),
      Validators.pattern(/[!@#$]/)],
      password1:['',Validators.required]
    },{
      validator: this.checkPasswords,
    });
   }
   checkPasswords(group: FormGroup) {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['password1'].value;

    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit(): void {
  }
  insertUsers(){
    this.u_service.insertUser(this.signupform.value)
      .subscribe((data)=>{
      alert('New user added');
      this.router.navigate(['/login'])
    })
    console.log(this.signupform.value)
    
  }

}
