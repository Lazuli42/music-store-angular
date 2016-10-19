import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Album} from './album.model';

@Component({
  selector: 'album-display',
  template: `
    <div *ngFor="let album of childAlbumList">
      <h4>$ {{album.price}} | <b>{{album.name}} | </b> by {{album.artist}} |  #{{album.genre}}</h4>
    </div>
  `
})

export class AlbumDisplayComponent {
  @Input() childAlbumList: Album[];
}
