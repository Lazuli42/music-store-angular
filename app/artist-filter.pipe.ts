import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "artistFilter",
  pure: false
})

export class ArtistFilterPipe implements PipeTransform {
  transform(input: Album[], selectedArtist)  {
    var output: Album[] = [];
    var artistArray = ["Dwarf and the Dwarf Tones", "Professor Scent", "Yenny and the Jets", "Jeb Barton III", "Brawlfook", "Armani Bangengson", "DuPaul"];
    // console.log(input);
    // console.log(selectedArtist);
    if (selectedArtist != "All") {
      for (var g=0; g < artistArray.length; g++) {
        for (var i=0; i < input.length; i++) {
          if (artistArray[g] === input[i].artist && artistArray[g] === selectedArtist) {
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
