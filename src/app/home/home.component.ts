import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@NgModule({
  imports: [
    MatFormField,
   ],
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  cityName = {'city' : ''};
  options: string[] = ['Mumbai', 'Delhi', 'Bengaluru', 'Ahmedabad', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune',
   'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Patna', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam',
   'Vadodara', 'Firozabad', 'Ludhiana', 'Rajkot', 'Agra', 'Siliguri', 'Nashik', 'Faridabad', 'Patiala', 'Meerut',
   'Kalyan-Dombivali', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Dhanbad', 'Jodhpur', 'Amritsar', 'Raipur', 'Allahabad',
    'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Madurai', 'Guwahati', 'Chandigarh', 'Hubli-Dharwad', 'Amroha',
    'Moradabad', 'Gurgaon', 'Aligarh', 'Solapur', 'Ranchi', 'Jalandhar', 'Tiruchirappalli', 'Bhubaneswar', 'Salem',
    'Warangal', 'Mira-Bhayandar', 'Thiruvananthapuram', 'Bhiwandi', 'Saharanpur', 'Guntur', 'Amravati', 'Bikaner',
    'Noida', 'Jamshedpur', 'Bhilai', 'Nagar', 'Cuttack', 'Kochi', 'Udaipur', 'Bhavnagar', 'Dehradun', 'Asansol',
    'Nanded-Waghala', 'Ajmer', 'Jamnagar', 'Ujjain', 'Sangli', 'Loni', 'Jhansi', 'Pondicherry', 'Nellore', 'Jammu',
    'Belagavi', 'Raurkela', 'Mangaluru', 'Tirunelveli', 'Malegaon', 'Gaya', 'Tiruppur', 'Davanagere', 'Kozhikode',
    'Akola', 'Kurnool', 'Bokaro', 'Steel', 'City', 'Rajahmundry', 'Ballari', 'Agartala', 'Bhagalpur', 'Latur',
     'Dhule', 'Korba', 'Bhilwara', 'Brahmapur', 'Mysore', 'Muzaffarpur', 'Ahmednagar', 'Kollam', 'Raghunathganj',
     'Bilaspur', 'Shahjahanpur', 'Thrissur', 'Alwar', 'Kakinada', 'Nizamabad', 'Sagar', 'Tumkur', 'Hisar',
    'Rohtak', 'Panipat', 'Darbhanga', 'Kharagpur', 'Aizawl', 'Ichalkaranji', 'Tirupati', 'Karnal', 'Bathinda',
    'Rampur', 'Shivamogga', 'Ratlam', 'Modinagar', 'Durg', 'Shillong', 'Imphal', 'Hapur', 'Ranipet',
    'Anantapur', 'Arrah', 'Karimnagar', 'Parbhani', 'Etawah', 'Bharatpur', 'Begusarai', 'New', 'Delhi',
     'Chhapra', 'Kadapa', 'Ramagundam', 'Pali', 'Satna', 'Vizianagaram', 'Katihar', 'Hardwar', 'Sonipat', 
    'Nagercoil', 'Thanjavur', 'Murwara', '(Katni)', 'Naihati', 'Sambhal', 'Nadiad', 'Yamunanagar', 'English',
    'Bazar', 'Eluru', 'Munger', 'Panchkula', 'Raayachuru', 'Panvel', 'Deoghar', 'Ongole', 'Nandyal', 'Morena',
    'Bhiwani', 'Porbandar', 'Palakkad', 'Anand', 'Purnia', 'Baharampur', 'Barmer', 'Morvi', 'Orai', 'Bahraich',
    'Sikar', 'Vellore', 'Singrauli', 'Khammam', 'Mahesana', 'Silchar', 'Sambalpur', 'Rewa', 'Unnao', 'Hugli-Chinsurah',
    'Raiganj', 'Phusro', 'Adityapur', 'Alappuzha', 'Bahadurgarh', 'Machilipatnam', 'Rae', 'Bareli', 'Jalpaiguri',
    'Bharuch', 'Pathankot', 'Hoshiarpur', 'Baramula', 'Adoni', 'Jind', 'Tonk', 'Tenali', 'Kancheepuram', 'Vapi', 'Sirsa',
    'Navsari', 'Mahbubnagar', 'Puri', 'Robertson', 'Pet', 'Erode', 'Batala', 'Haldwani-cum-Kathgodam', 'Vidisha',
    'Saharsa', 'Thanesar', 'Chittoor', 'Veraval'];

  filteredOptions: Observable<string[]>;
  weather: any;
  currentLocation: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("Got position", position.coords);
        // console.log(Math.floor(position.coords.latitude));
        // console.log(Math.floor(position.coords.longitude));
        return this.data.getWeatherByCoord(Math.floor(position.coords.latitude).toString() ,
        Math.floor(position.coords.longitude).toString())
      .subscribe((res: any) => {
        this.currentLocation = res;
        // console.log(res);
        // console.log(this.currentLocation);
      });
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  getWeather() {
    // console.log(this.cityName.city);
    this.data.getWeather(this.cityName.city)
      .subscribe(res => {
        this.weather = res;
        console.log(this.weather);
        const currentUser = localStorage.getItem('currentUser');
    localStorage.setItem(currentUser + 'city' + JSON.stringify(this.weather.id) , this.weather.name);
        }
      );
  }

  onSelect(city: string) {
    this.cityName.city = city;
    document.getElementById('list').style.display = 'none';
    document.getElementById('autoSelect').style.display = 'none';
  }
}
