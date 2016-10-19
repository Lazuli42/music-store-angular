import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 id="header">Music Store</h1>
      <album-display
      [childAlbumList]="masterAlbumList"
      (albumDisplayEmitter)="displaySelectedThing($event)"
      ></album-display>
      <cart
      [cartAlbums]="masterAlbumList"
      [cartTotal]="calculateTotal()" class = "
      text-right"></cart>
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
    new Album("Clusterfunk", "DuPaul", 19, "Post-Neo Funk"),
    new Album("Mustardfunk", "DuPaul", 22, "Post-Neo Funk"),
    new Album("Stoop Jam", "Jeb Barton III", 15, "Cityjam"),
    new Album("Teen Dream", "Beach House", 12, "Dream Pop")
  ];
  public selectedGenre: string = null;
  displaySelectedThing(clickedThing: string) {
    this.selectedGenre = clickedThing;
  }
  calculateTotal() {
    var total: number = 0;
    for (var i=0; i < this.masterAlbumList.length; i++) {
      if (this.masterAlbumList[i].selectedForCart) {
        total += this.masterAlbumList[i].price;
      }
    }
    console.log(total);
    return total;
  }
}
