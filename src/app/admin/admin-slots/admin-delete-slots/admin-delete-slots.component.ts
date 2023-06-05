import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-delete-slots',
  templateUrl: './admin-delete-slots.component.html',
  styleUrls: ['./admin-delete-slots.component.scss']
})
export class AdminDeleteSlotsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private Api:AdminService){}
  deleteRecord(){
    this.Api.DeleteSlots(this.data._id).subscribe((res:any)=>{
      window.alert("Are You Sure Want to Delete This Record ?")
      window.location.reload()
    })

  }

}
