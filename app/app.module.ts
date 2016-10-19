import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumDisplayComponent } from './album-display.component';
import { CartComponent } from './cart.component';
import { GenreFilterPipe } from './genre-filter.pipe';
import { ArtistFilterPipe } from './artist-filter.pipe';
import { AlbumComponent } from './album.component';

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
    AlbumComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

}
