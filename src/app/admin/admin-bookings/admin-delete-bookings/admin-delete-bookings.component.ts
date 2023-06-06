import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-delete-bookings',
  templateUrl: './admin-delete-bookings.component.html',
  styleUrls: ['./admin-delete-bookings.component.scss']
})
export class AdminDeleteBookingsComponent {

  constructor(private Api:AdminService,@Inject(MAT_DIALOG_DATA) public data:any){}

  deleteRecord(){
    this.Api.DeleteBookings(this.data._id).subscribe((res:any)=>{
      window.location.reload()
    })
  }

}
