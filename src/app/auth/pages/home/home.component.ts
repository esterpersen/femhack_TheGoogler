import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  loadLogin: boolean = false;
  loadRegistration: boolean = false;


  ngOnInit(): void {

  }
  loadLoginComponent() {
    this.loadLogin = !this.loadLogin;
    if (this.loadRegistration) {
      this.loadRegistration = !this.loadRegistration;
    }
  }
  loadRegistrationComponent() {
    this.loadRegistration = !this.loadRegistration;
    if (this.loadLogin) {
      this.loadLogin = !this.loadLogin;
    }
  }

}
