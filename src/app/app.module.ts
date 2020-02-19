import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header } from './header/header.component';
import { Hero } from './hero/hero.component'
import { Teaser } from './teaser/teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Hero,
    Teaser
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
