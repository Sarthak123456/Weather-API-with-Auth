import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  userModel = {'name' : '' , 'mobile' : '' , 'email' : '' , 'city' : '' , 'country' : '' , 'username' : '' , 'password' : ''};

  saveUser() {
    const val = this.userModel;
    console.log(val);
    localStorage.setItem(val.username, val.password );
    this.router.navigateByUrl('/');

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigateByUrl('home');

  }
}

}
