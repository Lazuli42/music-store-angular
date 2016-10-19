import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Album} from './album.model';

@Component({
  selector: 'album-display',
  template: `
    <select (change)="filterByGenre($event.target.value)" class = "filter">
      <option value="All">All Genres</option>
      <option value="Experimental">Experimental</option>
      <option value="Post-Neo Funk">Post-Neo Funk</option>
      <option value="Rural">Rural</option>
      <option value="Soft Touch">Soft Touch</option>
      <option value="World Music">World Music</option>
    </select>



    <div *ngFor="let album of childAlbumList | genreFilter:selectedGenre">
      <h4>$ {{album.price}} | <b>{{album.name}} | </b> by {{album.artist}} |  #{{album.genre}}</h4>
    </div>
  `
})

export class AlbumDisplayComponent {
  @Input() childAlbumList: Album[];
  @Output() albumDisplayEmitter = new EventEmitter();
  public selectedGenre: string = "All";
  filterByGenre(clickedGenre) {
    this.selectedGenre = clickedGenre;
    console.log(clickedGenre);
  }
}
