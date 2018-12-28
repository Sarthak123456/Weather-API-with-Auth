import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  valid = true;

  userModel = {'name' : '' , 'mobile' : '' , 'email' : '' , 'city' : '' , 'country' : '' , 'username' : '' , 'password' : ''};

  saveUser() {
    const val = this.userModel;
    // console.log(val);
    if (val.username !== '' &&  val.password !== '' ) {
    localStorage.setItem(val.username, val.password );
    this.router.navigateByUrl('/');
  } else {
    this.valid = false;
  }
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigateByUrl('home');

  }
}

}
