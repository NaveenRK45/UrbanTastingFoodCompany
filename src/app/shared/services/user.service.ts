import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  SignUp(data:any){
    return this.http.post('http://localhost:5000/user/signup',data)
  }
  Login(data:any){
    return this.http.post('http://localhost:5000/user/login',data)
  }
  EmailVerify(){
    return this.http.get('http://localhost:5000/user/verify')
  }
  MakeOrder(data:any){
    return this.http.post('http://localhost:5000/user/booking',data)
  }
  UpdateOrder(id:any,data:any){
    return this.http.post('http://localhost:5000/user/booking/'+id,data)
  }
}
