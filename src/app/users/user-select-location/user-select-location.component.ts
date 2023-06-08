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
  selectLocation(){
    this.user = localStorage.getItem('UTFC-User')
    console.log(this.user,"user");

    let Data ={
      ...this.user.value
    }
    this.Api.MakeOrder(Data).subscribe((res:any)=>{
      console.log(res,"order");
      
    })
    
  }

}
