import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-edit-branches',
  templateUrl: './admin-edit-branches.component.html',
  styleUrls: ['./admin-edit-branches.component.scss']
})
export class AdminEditBranchesComponent implements OnInit{
  UpdateBranchForm!:FormGroup

  constructor(private fb:FormBuilder,
              private Api:AdminService,
              @Inject(MAT_DIALOG_DATA) public data:any){
    
  }

  ngOnInit(): void {
    this.UpdateBranchForm = this.fb.group({
      location:['',[Validators.required]],
      longitude:['',[Validators.required]],
      latitude:['',[Validators.required]],
      lunch:[''],
      lunch_slots:[''],
      dinner:[''],
      dinner_slots:[''],
      status:[''],
      radius:['',[Validators.required]],
    });
    this.UpdateBranchForm.patchValue({
      location:this.data.location,
      longitude:this.data.longitude,
      latitude:this.data.latitude,
      lunch:this.data.lunch,
      lunch_slots:this.data.lunch_slots,
      dinner:this.data.dinner,
      dinner_slots:this.data.dinner_slots,
      status:this.data.status,
      radius:this.data.radius,

    })
  }
  UpdateBranch(){
    if(this.UpdateBranchForm.value.lunch == true){
      this.UpdateBranchForm.value.lunch = 'Yes';
    }else{
      this.UpdateBranchForm.value.lunch = 'No';
    }
    if(this.UpdateBranchForm.value.dinner == true){
      this.UpdateBranchForm.value.dinner = 'Yes';
    }else{
      this.UpdateBranchForm.value.dinner = 'No';
    }
    if(this.UpdateBranchForm.value.status == true){
      this.UpdateBranchForm.value.status = 'Yes';
    }else{
      this.UpdateBranchForm.value.status = 'No';
    }

    const U ={
      ...this.UpdateBranchForm.value
    }

    if(this.UpdateBranchForm.valid){
      this.Api.UpdateBranch(this.data._id,U).subscribe((res:any)=>{
        if(res){
          alert("Branch Update Successfully")
          window.location.reload()
        }else{
          alert("Not Update")
        }
      })
    }
  }
}
