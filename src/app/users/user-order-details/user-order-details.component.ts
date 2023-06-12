import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { UserConfirmComponent } from '../user-confirm/user-confirm.component';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.scss']
})
export class UserOrderDetailsComponent implements OnInit{
  users:any
  Branch:any
  myDate:any
  week:any=[]
  selectedIndex=0;

constructor(private Api:UserService,private routes:Router,private dialog:MatDialog){}

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('UTFC-User')!)
    this.Api.getProfile(this.users._id).subscribe((res:any)=>{
      this.Branch = res;      
    })
   
    let curr = new Date() 

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    this.week.push(day)
  }
  

  }
  lunch(){
    this.dialog.open(UserConfirmComponent,{
      width:"80%",
      height:"85%"
    })

  }
  dinner(){
    this.dialog.open(UserConfirmComponent,{
      width:"80%",
      height:"85%",
      // data:d
    })
  }
  reLocate(){
    this.routes.navigate(['/user-location'])
  }
  logout(){
    this.routes.navigate(['/user-login'])
  }

}
