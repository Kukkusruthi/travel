import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegisterationComponent } from './travel-registeration/travel-registeration.component';
import { SearchplacesComponent } from './searchplaces/searchplaces.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegisterationComponent,
    SearchplacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
