import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AdminAddBookingsComponent } from '../../admin-bookings/admin-add-bookings/admin-add-bookings.component';
import { AdminAddBranchesComponent } from '../admin-add-branches/admin-add-branches.component';
import { AdminEditBranchesComponent } from '../admin-edit-branches/admin-edit-branches.component';
import { AdminDeleteBranchesComponent } from '../admin-delete-branches/admin-delete-branches.component';

@Component({
  selector: 'app-admin-view-branches',
  templateUrl: './admin-view-branches.component.html',
  styleUrls: ['./admin-view-branches.component.scss']
})
export class AdminViewBranchesComponent {
  
  displayedColumns:string[] =['Id','user','employeeId','branch','bookingDate','launchStatus','DinnerStatus','slot','createdDate','modifiedDate','action']
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  Bookings:any;


  constructor(private AdminApi:AdminService,public dialog:MatDialog){
    this.AdminApi.ViewBranch().subscribe((res:any)=>{
      this.Bookings = res;
      this.dataSource = new MatTableDataSource(this.Bookings)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }
  add(){
    this.dialog.open(AdminAddBranchesComponent,{
      width:"40%",
      height:"89%"
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  Edit(e:any){
    this.dialog.open(AdminEditBranchesComponent,{
      width:"40%",
      height:"89%",
      data:e
    })
  }
  Delete(d:any){
    this.dialog.open(AdminDeleteBranchesComponent,{
      width:"25%",
      height:"32%",
      data:d
    })
  }
}
