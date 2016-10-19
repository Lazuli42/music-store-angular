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

    <div *ngFor="let album of childAlbumList | genreFilter:selectedGenre | artistFilter:selectedArtist">
      <h4>$ {{album.price}} | <b>{{album.name}} | </b> by {{album.artist}} |  #{{album.genre}}</h4>
    </div>

  `
})

export class AlbumDisplayComponent {
  @Input() childAlbumList: Album[];
  @Output() albumDisplayEmitter = new EventEmitter();
  public selectedArtist: string = "All";
  public selectedGenre: string = "All";
  filterByGenre(clickedGenre) {
    this.selectedGenre = clickedGenre;
    console.log(clickedGenre);
  }
  filterByArtist(clickedArtist) {
    this.selectedArtist = clickedArtist;
    console.log(clickedArtist);
  }
}
