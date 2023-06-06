import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddBookingsComponent } from '../admin-add-bookings/admin-add-bookings.component';
import { EditBookingsComponent } from '../edit-bookings/edit-bookings.component';
import { AdminDeleteBookingsComponent } from '../admin-delete-bookings/admin-delete-bookings.component';




@Component({
  selector: 'app-admin-view-bookings',
  templateUrl: './admin-view-bookings.component.html',
  styleUrls: ['./admin-view-bookings.component.scss']
})
export class AdminViewBookingsComponent {

  displayedColumns:string[] =['Id','user','employeeId','branch','bookingDate','launchStatus','DinnerStatus','slot','action']
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  Bookings:any;


  constructor(private AdminApi:AdminService,public dialog:MatDialog) {

    this.AdminApi.ViewBookings().subscribe((res:any)=>{
      this.Bookings = res;
      this.dataSource = new MatTableDataSource(this.Bookings)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  add(){
    this.dialog.open(AdminAddBookingsComponent,{
      width:"40%",
      height:"89%"
    })
  }
  Edit(e:any){
    this.dialog.open(EditBookingsComponent,{
      width:"40%",
      height:"89%",
      data:e
    })
  }
  Delete(d:any){
    this.dialog.open(AdminDeleteBookingsComponent,{
      width:"25%",
      height:"32%",
      data:d
    })
  }
}
