import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = {'username' : '' , 'password' : ''};
  loggedIn = true;

  constructor(private route: Router) { }

  onSave() {
    const val = this.userModel;
    const username = val.username;
    const password = val.password;
    for ( let i = 0, len = localStorage.length; i < len; i++) {
      const key = localStorage.key(i);
      const value = localStorage[key];
      if (value === (password) && key === (username)) {
        this.route.navigateByUrl('home');
        this.loggedIn = true;
        localStorage.setItem('currentUser' , username);
        // console.log(this.loggedIn);
      }
  }
    this.loggedIn = false;
    // console.log(this.loggedIn);
    location.reload();

  }
    // this.route.navigateByUrl('register');


  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
    this.route.navigateByUrl('home');

    }
  }
}
