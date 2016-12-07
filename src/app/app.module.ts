import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./in-memory-data.service";
import {RestaurantService} from "./restaurant.service";

import { TestComponent } from './test/test.component';
import { MealComponent } from './meal/meal.component';

import './rxjs-extensions';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) //, { delay: 100 }
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
