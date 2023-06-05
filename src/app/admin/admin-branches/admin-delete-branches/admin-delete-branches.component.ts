import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-delete-branches',
  templateUrl: './admin-delete-branches.component.html',
  styleUrls: ['./admin-delete-branches.component.scss']
})
export class AdminDeleteBranchesComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private Api:AdminService) { }

  deleteRecord(){
    this.Api.DeleteBranch(this.data._id).subscribe((res:any)=>{
      window.alert("Are You Sure Want to Delete This Record ?")
      window.location.reload()
    })
  }
}
