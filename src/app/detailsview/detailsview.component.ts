import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.css']
})
export class DetailsviewComponent implements OnInit {
  error = 'loading...';
  city: any;
  constructor(private data: DataService,  private route: ActivatedRoute) { }

  ngOnInit() {

    const cityName = this.route.snapshot.paramMap.get('name');
    return this.data.getWeather(cityName).subscribe(res => {
      this.city = res;
      // console.log(this.city);
    }, err => this.error = 'Something went wrong!'

    );
  }

}
