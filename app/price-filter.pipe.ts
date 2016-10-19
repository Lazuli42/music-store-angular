import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "priceFilter",
  pure: false
})

export class PriceFilterPipe implements PipeTransform {
  transform(input: Album[], budget: number)  {
    var output: Album[] = [];
    if (budget > 0) {
      for (var i=0; i < input.length; i++) {
        if (input[i].price <= budget) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
