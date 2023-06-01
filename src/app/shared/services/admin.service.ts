import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // private baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  showBookings(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


}
