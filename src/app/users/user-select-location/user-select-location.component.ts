import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-select-location',
  templateUrl: './user-select-location.component.html',
  styleUrls: ['./user-select-location.component.scss']
})
export class UserSelectLocationComponent implements OnInit{
  constructor(private Api:UserService,private Routes:Router){}
  Branches:any
  user:any
  ngOnInit(): void {
    this.Api.getBranches().subscribe((res:any)=>{
      this.Branches = res;
    })

  }
  selectLocation(b:any){
    this.user = JSON.parse(localStorage.getItem('UTFC-User')!)
    console.warn(this.user._id,"user");

    let Data ={
      ...this.user.value,
      branch:b
    }
    // this.Api.MakeOrder(Data).subscribe((res:any)=>{
    //   console.log(res,"order");
      
    // })
    this.Api.updateProfile(this.user._id,Data).subscribe((res:any)=>{
      console.log(res,"updateProfile");
      
    })
    
  }

}
