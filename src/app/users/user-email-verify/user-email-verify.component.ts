import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-email-verify',
  templateUrl: './user-email-verify.component.html',
  styleUrls: ['./user-email-verify.component.scss']
})
export class UserEmailVerifyComponent implements OnInit{
  Profile: any;
  
  constructor(
    private API:UserService,
    private route:ActivatedRoute
    ){}
  ngOnInit(): void {
  this.route.queryParams.subscribe((res:any)=>{

    let VID=res['id'];
    this.API.getProfile(VID).subscribe((res:any)=>{
      this.Profile = res; 
    })
    if(VID){
      this.API.EmailVerify(VID).subscribe((res:any)=>{
      })
    }
  })

  }

}
