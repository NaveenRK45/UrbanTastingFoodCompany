import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.scss']
})
export class UserForgotPasswordComponent implements OnInit{

  constructor(private Api:UserService){

  }

  ngOnInit(): void {


  }
  send(){

  }

}
