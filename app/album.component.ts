import {Component, Input, Output} from '@angular/core';
import {Album} from './album.model';

@Component({
  selector: 'album',
  template: `
    <div class="checkbox">
      <input *ngIf="album.selectedForCart === true" type="checkbox" checked (click)="addToCart(false)"/>
      <input *ngIf="album.selectedForCart === false" type="checkbox" (click)="addToCart(true)"/>
      <label>$ {{album.price}} | <b>{{album.name}} | </b> by {{album.artist}} |  #{{album.genre}}</label>
    </div>
  `
})
// the addToCart method is responsible for changing the property from true or false, aka "in cart" or not.
export class AlbumComponent {
  @Input() album: Album;
  addToCart(sentToCart: boolean) {
    this.album.selectedForCart = sentToCart;
  }
}
