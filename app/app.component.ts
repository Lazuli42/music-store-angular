import { Component } from '@angular/core';
import {Album} from './album.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Music Store</h1>
    </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Dwarf and the Dwarf Tones", "Dwarf and the Dwarf Tones", 18, "Soft Touch"),
    new Album("Waft", "Professor Scent", 14, "Experimental"),
    new Album("Japanese Characters", "Yenny and the Jets", 17, "World Music"),
    new Album("Porch Jam", "Jeb Barton III", 13, "Rural"),
    new Album("Ragefist", "Brawlfook", 18, "Soft Touch"),
    new Album("In the Club", "Armani Bangengson", 15, "Rural"),
    new Album("Clusterfunk", "DuPaul", 19, "Post-Neo Funk")
  ];
}
