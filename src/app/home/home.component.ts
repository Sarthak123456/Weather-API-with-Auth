import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cityName = {'city' : 'Bangalore'};
  cities = ['Bangalore', 'Delhi', 'Mumbai', 'Ranchi', 'Dehradun', 'Jaipur'];
  weather: any;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getWeather() {
    console.log(this.cityName.city);
    this.data.getWeather(this.cityName.city)
      .subscribe(res => {
        this.weather = res;
        console.log(this.weather);
        const currentUser = localStorage.getItem('currentUser');
    localStorage.setItem(currentUser + 'city' + JSON.stringify(this.weather.id) , this.weather.name);
        }
      );
  }

  onSelect() {
    this.cityName.city = 'Bangalore';
    console.log(document.querySelector('.autoSelect'));
  }
}
