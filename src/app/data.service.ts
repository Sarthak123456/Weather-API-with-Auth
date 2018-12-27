import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=823ff873c1dfec24ab2cf53a54d75526');
  }

  getWeatherByCoord(lat: string, long: string) {

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long +
    '&APPID=823ff873c1dfec24ab2cf53a54d75526');
  }

  loggedIn() {
    return !!localStorage.getItem('currentUser');
  }
}
