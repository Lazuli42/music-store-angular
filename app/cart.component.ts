import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Album} from './album.model';

@Component({
  selector: 'cart',
  template: `
    <div class = "jumbotron" id="toggle-jumbo">
      <h3 class="cart">Cart: </h3>

      <div class = "row" *ngIf = "cartTotal">
        <h3 id="cart">Total: </h3>

        <div class = "col-xs-9">
          <div *ngFor="let album of cartAlbums">
            <div *ngIf="album.selectedForCart" (change)="pushAlbumToCart(album)" id="cart-albums">
              $ {{album.price}} | <b>{{album.name}}</b> |  by {{album.artist}}
            </div>
          </div>
        </div>

        <div class = "col-xs-3">
          <div id="displayed-cart-total">
              <h2> $ {{cartTotal}} </h2>
          </div>
        </div>
      </div>
    </div>


  `
})

export class CartComponent {
  @Input() cartAlbums: Album[];
  @Input() cartTotal: number;

}
