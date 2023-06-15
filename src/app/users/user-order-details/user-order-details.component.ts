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
  week: any = []
  selectedIndex = 0;
  buttonCondition:string = 'condition1'

  constructor(private Api: UserService, private routes: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('UTFC-User')!)
    this.Api.getProfile(this.users._id).subscribe((res: any) => {
      this.Branch = res; 
    });
    this.Api.getSlots(this.users.lunch_status).subscribe((res:any)=>{
      console.log(res,"check");
      
    })

    const startingDay = new Date();
    let thisDay = new Date(startingDay);

    for (let i = 0; i < 7; i++) {
      thisDay = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
      this.week.push(thisDay)
    }
  }
  lunch(date: any) {
    this.dialog.open(UserConfirmComponent, {
      width: "80%",
      height: "85%",
      data: {
        date: date,
        type: "Lunch"
      }
    })
    // [ngClass]="2+2 == 5 ? 'isBooked':'isCancel'"
  }
  dinner(date: any) {
    this.dialog.open(UserCancelComponent, {
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
    this.routes.navigate(['/user-login'])
  }

}
