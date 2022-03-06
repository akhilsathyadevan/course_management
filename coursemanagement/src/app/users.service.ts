import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  insertUser(user:any){
    return this.http.post<any>('http://localhost:3000/signup',{user})
  
  }
  loginUser(user:any){
    return this.http.post<any>('http://localhost:3000/login',{user})
  }
  addProfessor(user:any,id:any){
    return this.http.post<any>('http://localhost:3000/addprofessor',{user,id})
    
  }
  addStudent(user:any,id:any){
    return this.http.post<any>('http://localhost:3000/addstudent',{user,id})
  
  }
  getprofessor(id:any){
    return this.http.get<any>('http://localhost:3000/getprofessor/'+id)
  }
  getdata(id:any){
    return this.http.get<any>('http://localhost:3000/getdata/'+id)
  }
  addcourse(coursedata:any,id:any)
  {
    return this.http.post<any>('http://localhost:3000/addcourse',{coursedata,id})
  }
  getcourse(id:any){
    return this.http.get<any>('http://localhost:3000/getcourse/'+id)
  }
  getcourses(){
    return this.http.get<any>('http://localhost:3000/getallcourses')
  }
  getstudentprofile(id:any){
    return this.http.get<any>('http://localhost:3000/getstudentprofile/'+id)
  }
  applied(profile:any,course:any){
    return this.http.post<any>('http://localhost:3000/applied',{profile,course})
  }
  getmyapplications(id:any){
    return this.http.get<any>('http://localhost:3000/getmyapplications/'+id)
  }
  stu_applications(id:any){
    return this.http.get<any>('http://localhost:3000/stu_applications/'+id)
  }
  accept(stu_id:any,cid:any,seats:any)
  {
    return this.http.post<any>('http://localhost:3000/accept',{stu_id,cid,seats})
  }
  reject(stu_id:any,cid:any)
  {
    return this.http.post<any>('http://localhost:3000/reject',{stu_id,cid})
  }
  getnotifications(){
    return this.http.get<any>('http://localhost:3000/getnotifications')
  }
  delete(id:any){
    return this.http.get<any>('http://localhost:3000/delete/'+id)
  }
}
