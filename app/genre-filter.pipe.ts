import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "genreFilter",
  pure: false
})

export class GenreFilterPipe implements PipeTransform {
  transform(input: Album[], selectedGenre)  {
    var output: Album[] = [];
    var genreArray = ["Rural", "Soft Touch", "Experimental", "World Music", "Post-Neo Funk", "Softcore Rap", "Cityjam"];
    // console.log(input);
    // console.log(selectedGenre);
    if (selectedGenre != "All") {
      for (var g=0; g < genreArray.length; g++) {
        for (var i=0; i < input.length; i++) {
          if (genreArray[g] === input[i].genre && genreArray[g] === selectedGenre) {
            output.push(input[i]);
          }
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
