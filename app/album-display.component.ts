import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Album} from './album.model';

@Component({
  selector: 'album-display',
  template: `
    <select (change)="filterByGenre($event.target.value)">
      <option value="All">All Genres</option>
      <option value="Experimental">Experimental</option>
      <option value="Post-Neo Funk">Post-Neo Funk</option>
      <option value="Rural">Rural</option>
      <option value="Soft Touch">Soft Touch</option>
      <option value="World Music">World Music</option>
      <option value="Cityjam">Cityjam</option>
    </select>

    <select (change)="filterByArtist($event.target.value)">
      <option value="All">All Artists</option>
      <option value="Dwarf and the Dwarf Tones">Dwarf and the Dwarf Tones</option>
      <option value="Professor Scent">Professor Scent</option>
      <option value="Yenny and the Jets">Yenny and the Jets</option>
      <option value="Jeb Barton III">Jeb Barton III</option>
      <option value="Brawlfook">Brawlfook</option>
      <option value="Armani Bangengson">Armani Bangengson</option>
      <option value="DuPaul">DuPaul</option>
    </select>

    <label for = "sortByProperty">Sort by:
      <select (change)="sortByProperty($event.target.value)">
        <option value="alphaLowHigh">a-z</option>
        <option value="alphaHighLow">z-a</option>
        <option value="priceHighLow">$:low->high</option>
        <option value="priceLowHigh">$:low->high</option>
      </select>
    </label>

    <label for="maxPrice">Max Price</label>
    <input (change)="setBudget($event.target.value)" type="number" name="maxPrice">

    <div *ngFor="let currentAlbum of childAlbumList | genreFilter:selectedGenre | artistFilter:selectedArtist | priceFilter:budget | orderBy:propertyToSort:name"  id="master-list">

      <album [album]="currentAlbum"></album>
    </div>
  `
})
// the childAlbumList is an input - we get it from app.component. and is what allows us to cycle through the "for loop" above.
export class AlbumDisplayComponent {
  @Input() childAlbumList: Album[];
  @Output() albumDisplayEmitter = new EventEmitter();
  public selectedArtist: string = "All";
  public selectedGenre: string = "All";
  public budget: number;
  public propertyToSort: string = "alphaLowHigh";
  filterByGenre(clickedGenre) {
    this.selectedGenre = clickedGenre;
  }
  filterByArtist(clickedArtist) {
    this.selectedArtist = clickedArtist;
  }
  setBudget(targetBudget) {
    this.budget = parseInt(targetBudget);
    console.log(this.budget);
  }
  sortByProperty(selectedSort) {
    this.propertyToSort = selectedSort;
  }
}
