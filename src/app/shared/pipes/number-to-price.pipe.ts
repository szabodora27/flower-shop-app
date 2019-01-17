import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToPrice'
})
export class NumberToPricePipe implements PipeTransform {

  transform(value: number): string {
    return value +" $" ;
  }
}