import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';


@Component({
  selector: 'app-admin-add-branches',
  templateUrl: './admin-add-branches.component.html',
  styleUrls: ['./admin-add-branches.component.scss']
})
export class AdminAddBranchesComponent implements OnInit{
  AddBranchForm!:FormGroup

  constructor(private fb:FormBuilder,private Api:AdminService){

  }
  ngOnInit(): void {
    this.AddBranchForm = this.fb.group({
      location:['',[Validators.required]],
      longitude:['',[Validators.required]],
      latitude:['',[Validators.required]],
      lunch:[''],
      lunch_slots:[''],
      dinner:[''],
      dinner_slots:[''],
      status:[''],
      radius:['',[Validators.required]],
    })
  }
  AddBranch(){
    if(this.AddBranchForm.value.lunch == true){
      this.AddBranchForm.value.lunch = 'Yes';
    }else{
      this.AddBranchForm.value.lunch = 'No';
    }
    if(this.AddBranchForm.value.dinner == true){
      this.AddBranchForm.value.dinner = 'Yes';
    }else{
      this.AddBranchForm.value.dinner = 'No';
    }
    if(this.AddBranchForm.value.status == true){
      this.AddBranchForm.value.status = 'Yes';
    }else{
      this.AddBranchForm.value.status = 'No';
    }

let data ={
  ...this.AddBranchForm.value
}


    if (this.AddBranchForm.valid) {
      this.Api.AddBranch(data).subscribe((res: any) => {
        if (res) {
          alert('Branch Added Successfull');
          window.location.reload()
        } else {
          alert('something went wrong');
        }
      });
    }
  }
  

}
