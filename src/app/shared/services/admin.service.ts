import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  AdminLogin(username:any,password:any){
    return this.http.get('http://localhost:5000/admin/login?username='+ username+'&password='+password)
  }
  AddBranch(data:any){
    return this.http.post('http://localhost:5000/admin/addbranch',data)
  }
  ViewBranch(){
    return this.http.get('http://localhost:5000/admin/showbranches')
  }
  UpdateBranch(id:any,data:any){
    return this.http.put('http://localhost:5000/admin/updatebranch/'+id,data)
  }
  DeleteBranch(id:any){
    return this.http.delete('http://localhost:5000/admin/deletebranch/'+id)
  }
  AddSlots(data:any){
    return this.http.post('http://localhost:5000/admin/addslot',data)
  }
  ViewSlots(){
    return this.http.get('http://localhost:5000/admin/showslots')
  }
  UpdateSlots(id:any,data:any){
    return this.http.put('http://localhost:5000/admin/updateslot/'+id,data)
  }
  DeleteSlots(id:any){
    return this.http.delete('http://localhost:5000/admin/deleteslot/'+id)
  }
  AddBookings(data:any){
    return this.http.post('http://localhost:5000/admin/addbooking',data)
  }
  ViewBookings(){
    return this.http.get('http://localhost:5000/admin/showbookings')
  }
  UpdateBookings(id:any,data:any){
    return this.http.put('http://localhost:5000/admin/updatebookings/'+id,data)
  }
  DeleteBookings(id:any){
    return this.http.delete('http://localhost:5000/admin/deletebooking/'+id)
  }
  
  ViewConfirmed(){
    return this.http.get('http://localhost:5000/admin/showbookings')
  }
  ViewUsers(){
    return this.http.get('http://localhost:5000/admin/showusers')
  }


}
