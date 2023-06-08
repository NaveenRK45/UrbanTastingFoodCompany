import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  LoginForm!:FormGroup

  constructor(private Api:UserService,private fb:FormBuilder,private Routes:Router){}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email_id:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile_no:['',[Validators.required,Validators.pattern("[0-9 ]{10}")]]
    })
  }
  Login(){
    let Data ={
      ...this.LoginForm.value
    }

    if(this.LoginForm.valid){
      this.Api.Login(Data).subscribe((res:any)=>{
        if(res){
          if(res.is_Verified==true){
            localStorage.setItem('UTFC-User',JSON.stringify(res))
            this.Routes.navigate(['/user-location'])
          }else{
            alert(' Your email is not verified')
          }
        }else{
          alert("Login Failed")
        }
       
      })
    }
  }

}
