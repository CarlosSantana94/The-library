import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(data: any, nameFind: string): any {
    if (data.length === 0 || nameFind === '') {
      // only filters manufacturer
      return data;
    } else {
      return data.filter(dfilter => {
        return dfilter.name.toLowerCase().includes(nameFind.toLowerCase());
      });
    }
  }
}
