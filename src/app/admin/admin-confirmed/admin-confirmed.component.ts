import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-confirmed',
  templateUrl: './admin-confirmed.component.html',
  styleUrls: ['./admin-confirmed.component.scss']
})
export class AdminConfirmedComponent {
  displayedColumns:string[] =['Id','user','employeeId','branch','bookingDate','launchStatus','modifiedDate','slot']
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  Bookings:any;


  constructor(private AdminApi:AdminService,public dialog:MatDialog){
    this.AdminApi.ViewConfirmed().subscribe((res:any)=>{
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

}
