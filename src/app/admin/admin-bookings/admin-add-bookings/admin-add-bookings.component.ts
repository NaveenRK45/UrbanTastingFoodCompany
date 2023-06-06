import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-add-bookings',
  templateUrl: './admin-add-bookings.component.html',
  styleUrls: ['./admin-add-bookings.component.scss']
})
export class AdminAddBookingsComponent implements OnInit {
  AddBookingsForm!:FormGroup
  Branches: any;
  Users: any;
  Slots: any;

  constructor(private fb:FormBuilder,private Api:AdminService){}



  ngOnInit(): void {
    this.AddBookingsForm = this.fb.group({
      user_id:['',[Validators.required]],
      branch_id:['',[Validators.required]],
      booking_date:['',[Validators.required]],
      lunch_status:['',[Validators.required]],
      dinner_status:['',[Validators.required]],
      slot:['',[Validators.required]],
      status:['',[Validators.required]]
    })
    this.Api.ViewUsers().subscribe((res:any)=>{
      this.Users = res; 
    })
    this.Api.ViewBranch().subscribe((res:any)=>{
      this.Branches = res;
    })
    this.Api.ViewSlots().subscribe((res:any)=>{
      this.Slots = res;
    })
  }
  AddBookings(){
    // if(this.AddBookingsForm.value.lunch_status == 0){
    //     this.AddBookingsForm.value.lunch_status = 'not available'    
    // }else if(this.AddBookingsForm.value.lunch_status == 1){
    //   this.AddBookingsForm.value.lunch_status = 'available'
    // }else if(this.AddBookingsForm.value.lunch_status == 2){
    //   this.AddBookingsForm.value.lunch_status = 'booked By User'
    // }else if(this.AddBookingsForm.value.lunch_status == 3){
    //   this.AddBookingsForm.value.lunch_status = 'Cancelled'
    // }else if(this.AddBookingsForm.value.lunch_status == 4){
    //   this.AddBookingsForm.value.lunch_status = 'Confirmed'
    // }


    if(this.AddBookingsForm.value.Status == true){
      this.AddBookingsForm.value.Status=1
    }else{
      this.AddBookingsForm.value.Status=0
    }

    let A ={
      ...this.AddBookingsForm.value,
      booked_by:'admin'
    }
    

    if(this.AddBookingsForm.valid){
      this.Api.AddBookings(A).subscribe((res:any)=>{
        if(res){
          alert("Booking Added Suucessfully")
          window.location.reload()
        } else{
          alert("Not booked")
        }       
      })
    }
  }
}
