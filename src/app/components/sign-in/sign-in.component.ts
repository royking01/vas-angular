import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  title = 'softwork';
  id: string = '';
  email = '';
  name = '';
  password: any = '';
  select: string = ' Please Select an Account Type ';
  selectedUser = false;
  userType: string = '';
  signUp: boolean = false;
  notification = '';
  page;
  isLoged_in = false;
  constructor() {}
  ngOnInit() {
    this.page = true;
  }
  signup() {
    this.page = false;
    this.signUp = true;
  }

  logIn() {
    location.href = 'home';
  }

  enter() {}

  signupno() {}
  back() {
    this.page = true;
    this.signUp = false;
    // location.href = '/login';
  }
  signupnow() {}
  logout() {}
}
