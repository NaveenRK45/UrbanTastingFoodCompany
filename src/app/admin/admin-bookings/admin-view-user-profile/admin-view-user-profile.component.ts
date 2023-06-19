import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-view-user-profile',
  templateUrl: './admin-view-user-profile.component.html',
  styleUrls: ['./admin-view-user-profile.component.scss']
})
export class AdminViewUserProfileComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
  ngOnInit(): void {
    console.log(this.data,"Data");
    
  }

}
