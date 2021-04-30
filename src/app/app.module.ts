import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LocationComponent } from './components/location/location.component';
@NgModule({
  declarations: [
    AppComponent,
    CinemasComponent,
    LogInComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
