import { Component, Inject, OnInit, Type } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserCancelComponent } from '../user-cancel/user-cancel.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-confirm',
  templateUrl: './user-confirm.component.html',
  styleUrls: ['./user-confirm.component.scss']
})
export class UserConfirmComponent implements OnInit{
  Slots: any;
  checked:boolean = false;
  selectedSlots:any;
  profile:any

  constructor(private dialog:MatDialog,
    private dialogref:MatDialogRef<UserConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private Api:UserService){}


  ngOnInit(): void {
    this.profile = JSON.parse(localStorage.getItem('UTFC-User')!)   
    this.Api.getSlots(this.data.type).subscribe((res:any)=>{
      this.Slots = res;
    })
    
  }
  Book(){
    if(this.data.type=="Lunch"){
      let bookingdata = {
        user_id: this.profile._id,
      branch_id: this.profile.branch._id,
         booking_date: this.data.date,
         lunch_status: 4,
         dinner_status: 0,
        slot: this.selectedSlots,
      }
     this.Api.MakeOrder(bookingdata).subscribe((res:any)=>{   
      console.log(res,"result");
      
      // this.dialogref.close()
     })
      
    }else{
    let bookingdata = {
      user_id: this.profile._id,
      branch_id: this.profile.branch._id,
       booking_date: this.data.date,
       lunch_status: 0,
       dinner_status: 4,
      slot: this.selectedSlots,
    }
    this.Api.MakeOrder(bookingdata).subscribe((res:any)=>{
      this.dialogref.close()
     })
  }
  }
  selectSlot(d:any){
    this.selectedSlots= d.slot_name 
  }
}
