import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AlbumDisplayComponent } from './album-display.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    AlbumDisplayComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
