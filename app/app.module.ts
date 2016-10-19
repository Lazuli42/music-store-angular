import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumDisplayComponent } from './album-display.component';
import { AlbumComponent } from './album.component';
import { CartComponent } from './cart.component';
import { GenreFilterPipe } from './genre-filter.pipe';
import { ArtistFilterPipe } from './artist-filter.pipe';
import { PriceFilterPipe } from './price-filter.pipe';
import { OrderByPipe } from './orderBy.pipe';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    AlbumDisplayComponent,
    CartComponent,
    GenreFilterPipe,
    ArtistFilterPipe,
    PriceFilterPipe,
    OrderByPipe,
    AlbumComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

}
