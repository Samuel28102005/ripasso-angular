import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContComponent } from './cont/cont.component';
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
