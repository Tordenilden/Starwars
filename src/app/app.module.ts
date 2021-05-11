import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './Components/people/people.component';
import { HttpClientModule } from '@angular/common/http';
import { Menu1Component } from './Components/menu1/menu1.component';
import { Menu2Component } from './Components/menu2/menu2.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    Menu1Component,
    Menu2Component // hver gang vi opretter en Component - registreres
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
