import { Component, ViewChild } from '@angular/core';
import { AdminAddSlotsComponent } from '../admin-add-slots/admin-add-slots.component';
import { AdminEditSlotsComponent } from '../admin-edit-slots/admin-edit-slots.component';
import { AdminDeleteSlotsComponent } from '../admin-delete-slots/admin-delete-slots.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-view-slots',
  templateUrl: './admin-view-slots.component.html',
  styleUrls: ['./admin-view-slots.component.scss']
})
export class AdminViewSlotsComponent {
  displayedColumns:string[] =['Id','sName','type','fromTime','toTime','count','status','action']
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  Bookings:any;


  constructor(private AdminApi:AdminService,public dialog:MatDialog){
    this.AdminApi.ViewSlots().subscribe((res:any)=>{
      this.Bookings = res;
      this.dataSource = new MatTableDataSource(this.Bookings)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }
  add(){
    this.dialog.open(AdminAddSlotsComponent,{
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
    this.dialog.open(AdminEditSlotsComponent,{
      width:"40%",
      height:"89%",
      data:e
    })
  }
  Delete(d:any){
    this.dialog.open(AdminDeleteSlotsComponent,{
      width:"25%",
      height:"32%",
      data:d
    })
  }

}
