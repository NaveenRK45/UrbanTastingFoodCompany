import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserCancelComponent } from '../user-cancel/user-cancel.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-confirm',
  templateUrl: './user-confirm.component.html',
  styleUrls: ['./user-confirm.component.scss']
})
export class UserConfirmComponent implements OnInit{
  constructor(private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private Api:UserService){}


  ngOnInit(): void {
    // const profile = JSON.parse(localStorage.getItem('UTFC-User')!)
    // console.log(profile,"check");
    
    this.Api.getSlots().subscribe((res:any)=>{
      console.log(res,"check");
      
    })
    
  }
  Book(){
    this.dialog.open(UserCancelComponent,{
      width:"85%",
      height:"80%"
    })
  }

}
