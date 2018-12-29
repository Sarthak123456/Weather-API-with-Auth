import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean;
  myTitle = 'WhiteHat Junior';
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {

 if (this.data.loggedIn()) {
      this.loggedIn = true;
    }
  }

  logout() {
    // console.log('logged out');
    this.router.navigateByUrl('/');
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  login() {
    if (this.data.loggedIn()) {
      this.loggedIn = true;
    }
  }

}
