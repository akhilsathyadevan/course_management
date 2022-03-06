import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  professorloggedIn(){
    var role = localStorage.getItem('session');
    if(role==='professorsession')
    {
      return true
    }
    else{
      return false
    }
  }
  studentloggedIn(){
    var role = localStorage.getItem('session');
    if(role==='studentsession')
    {
      return true
    }
    else{
      return false
    }
  }
  getrole(){
    return localStorage.getItem('session')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
