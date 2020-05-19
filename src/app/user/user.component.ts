import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  links = [{
    label: 'Sign in',
    path: '../login',
  },
  {
    label: 'Sign Up',
    path: '../register',
  }];

  constructor() { }

  ngOnInit() {
  }

}
