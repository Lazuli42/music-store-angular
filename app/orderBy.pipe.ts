import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "orderBy",
  pure: false
})

export class OrderByPipe implements PipeTransform {
  transform(input: Album[], propertyToSort: string) {
    if (propertyToSort === "priceLowHigh") {
      input.sort(function(a, b) {
        console.log(a.price);
        console.log(a);
        return (a.price) - (b.price);
      });
    } else if (propertyToSort === "alphaHighLow") {
      return input.sort().reverse();
    } else if (propertyToSort === "priceHighLow") {
      return input.sort();
    }
  }
}
