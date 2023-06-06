import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{
  AdminLoginForm!:FormGroup
  constructor(private Api:AdminService,private fb:FormBuilder,private Routes:Router){}
  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  AdminLogin(){
    let Data ={
      ...this.AdminLoginForm.value
    }
    
    if(this.AdminLoginForm.valid){
      this.Api.Adminlogin(Data).subscribe((res:any)=>{
        if(res){
          console.log(res,"admin");
          
          alert("Admin Logged Successfully")
          localStorage.setItem('admin',JSON.stringify(res))
          this.Routes.navigate(['admin'])
        }else{
          alert("Login Failed")
        }
      })
    }
  }

}
