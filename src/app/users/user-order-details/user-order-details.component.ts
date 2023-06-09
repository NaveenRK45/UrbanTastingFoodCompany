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

constructor(private Api:UserService,private routes:Router,private dialog:MatDialog){}

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('UTFC-User')!)
    this.Api.getProfile(this.users._id).subscribe((res:any)=>{
      console.log(res,"profile");
      this.Branch = res;      
    })

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
      height:"85%"
    })
  }
  reLocate(){
    this.routes.navigate(['/user-location'])
  }
  logout(){
    this.routes.navigate(['/user-login'])
  }

}
