import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-add-slots',
  templateUrl: './admin-add-slots.component.html',
  styleUrls: ['./admin-add-slots.component.scss']
})
export class AdminAddSlotsComponent implements OnInit{
  AddSlotForm!:FormGroup

  constructor(private fb:FormBuilder,private Api:AdminService){}
  ngOnInit(): void {
    this.AddSlotForm = this.fb.group({
      slot_name:['',[Validators.required]],
      type:['',[Validators.required]],
      from_time:['',[Validators.required]],
      to_time:['',[Validators.required]],
      status:[''],
      count:['',[Validators.required]]
    })

  }
  AddSlot(){
    if(this.AddSlotForm.value.status == true){
      this.AddSlotForm.value.status = 'Yes'
    }else{
      this.AddSlotForm.value.status = 'No'
    }

    let data ={
      ...this.AddSlotForm.value,
    }

    if(this.AddSlotForm.valid){
      this.Api.AddSlots(data).subscribe((res:any)=>{
        if (res) {
          alert('Slot Added Successfull');
          console.log(res,"slots"); 
          window.location.reload()
        } else {
          alert('something went wrong');
        }
      })
    }

  }

}
