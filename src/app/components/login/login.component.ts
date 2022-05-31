import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor() { }

  userLog = {
   email: this.email,
   password: this.password
  }
  
  login() {
    this.userLog.email = this.email;
    this.userLog.password = this.password;
    
    console.log(this.email);
    console.log(this.password);
    console.log(this.userLog);
  }
}
 