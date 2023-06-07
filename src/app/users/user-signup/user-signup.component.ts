import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit{
  UserSignupForm!:FormGroup

  constructor(private Api:UserService,private Routes:Router,private fb:FormBuilder){}

  ngOnInit(): void {
    this.UserSignupForm = this.fb.group({
      emp_name:['',[Validators.required]],
      email_id:['',[Validators.required]],
      mobile_no:['',[Validators.required]],
      emp_id:['',[Validators.required]],
    })
  }
  SignUp(){
    let Data ={
      ...this.UserSignupForm.value,
      role:'user',
      is_Verified:'false'
    }
if(this.UserSignupForm.valid){
    this.Api.SignUp(Data).subscribe((res:any)=>{
      if(res){
        alert("User Added Successfully")
      }else{
        alert("Error Occuired")
      }
    })
  }
  }

}
