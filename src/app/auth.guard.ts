import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router , private data: DataService) {}

  canActivate(): boolean {

      if (this.data.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }

  }
}
