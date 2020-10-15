import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('module loaded lazylly...');
  }

  handleLogin() {
    console.log('login service will be called...');

  }

}
