import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-edit-bookings',
  templateUrl: './edit-bookings.component.html',
  styleUrls: ['./edit-bookings.component.scss']
})
export class EditBookingsComponent implements OnInit{
  UpdateBookingsForm!:FormGroup
  Users: any;
  Branches: any;
  Slots: any;
  constructor(private fb:FormBuilder,private Api:AdminService,@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
    this.UpdateBookingsForm = this.fb.group({
      user_id:['',[Validators.required]],
      branch_id:['',[Validators.required]],
      booking_date:['',[Validators.required]],
      lunch_status:['',[Validators.required]],
      dinner_status:['',[Validators.required]],
      slot:['',[Validators.required]],
      status:['',[Validators.required]]
    });
    this.Api.ViewUsers().subscribe((res:any)=>{
      this.Users = res; 
    })
    this.Api.ViewBranch().subscribe((res:any)=>{
      this.Branches = res;
    })
    this.Api.ViewSlots().subscribe((res:any)=>{
      this.Slots = res;
    })

    
    
    this.UpdateBookingsForm.patchValue({
      user_id:this.data.user_id,
      branch_id:this.data.branch_id,
      booking_date:this.data.booking_date,
      lunch_status:this.data.lunch_status,
      dinner_status:this.data.dinner_status,
      slot:this.data.slot,
      status:this.data.status,
    })
  }
  UpdateBookings(){
    const U={
      ...this.UpdateBookingsForm.value
    }

    if(this.UpdateBookingsForm.valid){
      this.Api.UpdateBookings(this.data._id,U).subscribe((res:any)=>{
        if(res){
          alert("Booking Updated Successfully");
          window.location.reload()
        }else{
          alert("Not Updated")
        }
      })
    }
  }

}
