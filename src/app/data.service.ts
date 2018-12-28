import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throttleTime } from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/Observable/ErrorObservable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?=' + city + '&APPID=823ff873c1dfec24ab2cf53a54d75526')
    .pipe (
      catchError(err => {
        if (err.status === 400){
        console.log('Handling error locally and rethrowing it...', err);
        return Observable.throw(err.message);
        }
    })
    );
  }

  getWeatherByCoord(lat: string, long: string) {

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long +
    '&APPID=823ff873c1dfec24ab2cf53a54d75526');
  }

  loggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  private handleError(error: HttpErrorResponse) {
    return new ErrorObservable();

  }
}
