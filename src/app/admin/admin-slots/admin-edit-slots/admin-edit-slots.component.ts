import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-edit-slots',
  templateUrl: './admin-edit-slots.component.html',
  styleUrls: ['./admin-edit-slots.component.scss']
})
export class AdminEditSlotsComponent implements OnInit{
  UpdateSlotForm!:FormGroup

  constructor(private fb:FormBuilder,
              private Api:AdminService,
              @Inject(MAT_DIALOG_DATA) public data: any
              ){}

  ngOnInit(): void {
    console.log(this.data,"check");


    this.UpdateSlotForm = this.fb.group({
      slot_name:['',[Validators.required]],
      type:['',[Validators.required]],
      from_time:['',[Validators.required]],
      to_time:['',[Validators.required]],
      status:[''],
      count:['',[Validators.required]]
    });
    if(this.data.status == 'Yes'){
      this.data.status = true;
    }else{
      this.data.status = false;
    }
    console.log(this.data,"Data");
    
    this.UpdateSlotForm.patchValue({
      slot_name:this.data.slot_name,
      type:this.data.type,
      from_time:this.data.from_time,
      to_time:this.data.to_time,
      status:this.data.status,
      count:this.data.count,
    })
  }
  UpdateSlot(){
    if(this.UpdateSlotForm.value.status == true){
      this.UpdateSlotForm.value.status = 'Yes'
    }else{
      this.UpdateSlotForm.value.status = 'No'
    }
    const O ={
      ...this.UpdateSlotForm.value,
    }
    if(this.UpdateSlotForm.valid){
    this.Api.UpdateSlots(this.data._id,O).subscribe((res:any)=>{
      if(res){
        alert("Update Slot Successfully")
        window.location.reload()
      }else{
        alert("Not Updated")
      }
    })
    }

  }
}
