import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageCard2x1Component } from './image-card2x1/image-card2x1.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCard2x1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
