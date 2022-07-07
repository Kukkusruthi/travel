import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegisterationComponent } from './travel-registeration/travel-registeration.component';
import { SearchplacesComponent } from './searchplaces/searchplaces.component';
import { ViewDestinationComponent } from './view-destination/view-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegisterationComponent,
    SearchplacesComponent,
    ViewDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
