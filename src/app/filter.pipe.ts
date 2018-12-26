import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cities: any, term: any): any {
    if (term === null) {
      return null;
    } else {
      // console.log('filter working');
     document.getElementById('autoSelect').style.display = 'block';
     document.getElementById('list').style.display = 'block';
      return cities.filter((ninja: any) => ninja.toLowerCase().includes(term.toLowerCase()));
    }
  }

}
