import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { UserConfirmComponent } from '../user-confirm/user-confirm.component';
import { UserCancelComponent } from '../user-cancel/user-cancel.component';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.scss']
})
export class UserOrderDetailsComponent implements OnInit {
  users: any
  Branch: any
  myDate: any
  startingDay:any
  week: any = []
  selectedIndex = 0;
  buttonCondition:string = 'condition1';
  isdisabled:boolean= false;
  isButtonDisabled:boolean = true;
  

  constructor(private Api: UserService, private routes: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('UTFC-User')!)
    
    this.Api.getProfile(this.users._id).subscribe((res: any) => {
      this.Branch = res;  
    });
    this.Api.ViewOrders(this.users._id).subscribe((res:any)=>{
      console.log(res,"check");
      
    })

    this.startingDay = new Date();
    let thisDay = new Date(this.startingDay);

    for (let i = 0; i < 7; i++) {
      thisDay = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
      this.week.push(thisDay)
    }
  }
  changeCondition() {
    if (this.buttonCondition === 'condition1') {
      this.buttonCondition = 'condition2';
      console.log('condition2'); 
    } else if (this.buttonCondition === 'condition2') {
      this.buttonCondition = 'condition3';
      console.log('condition3');    
    } else {
      this.buttonCondition = 'condition1';
      console.log('condition1');  
    }
  }
  lunch(date: any) {
    // if(this.startingDay){
    //     this.isdisabled = true
    // }else{
    //   console.log('error');  
    // }
    // this.dialog.open(UserConfirmComponent, {
    //   width: "80%",
    //   height: "85%",
    //   data: {
    //     date: date,
    //     type: "Lunch"
    //   }
    // })
  }
  dinner(date: any) {
    this.dialog.open(UserConfirmComponent, {
      width: "80%",
      height: "85%",
      data: {
        date: date,
        type: "Dinner"
      }
    })
  }
  reLocate() {
    this.routes.navigate(['/user-location'])
  }
  logout() {
    this.routes.navigate(['/user-login']);
    // localStorage.removeItem('UTFC-User');
  }
}
