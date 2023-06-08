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
  x:any

  constructor(private Api:UserService,private Routes:Router,private fb:FormBuilder){}

  ngOnInit(): void {
    this.x = 'EMP' + Math.floor(Math.random() * 10000 + 1);
    console.log(this.x,"emp-id");

    this.UserSignupForm = this.fb.group({
      emp_name:['',[Validators.required]],
      email_id:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile_no:['',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      emp_id:[this.x],
    })
    // ,Validators.pattern("[A-Z\d]{1}[A-Z\d._/\-]{49}$")

  }
  SignUp(){
      let Data ={
        ...this.UserSignupForm.value,
        emp_id: this.x
      }
  if(this.UserSignupForm.valid){
      this.Api.SignUp(Data).subscribe((res:any)=>{
        if(res){
        }else{
          alert("Error Occuired")
        }
      })
    }
  }

}
