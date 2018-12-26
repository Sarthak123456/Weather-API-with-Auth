import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cities = [];
  constructor(private router: Router) { }


  onSelect(city: any) {
    this.router.navigate(['/details', city]);

  }

  ngOnInit() {
    // localStorage.forEach((city: string  , index: number) => console.log(city));
    // this.cities = localStorage.getItem('');
    for (let i = 0 ; i < localStorage.length ; i++) {
      // const key = localStorage[i];
      const key = localStorage.key(i);
      const value = localStorage[key];
      // console.log(key + '=> ' + value);
      const currentUser = localStorage.getItem('currentUser');
      if (key.includes(currentUser + 'city')) {
        this.cities.push(value);
        console.log(value);
      }
    }
  }

}
