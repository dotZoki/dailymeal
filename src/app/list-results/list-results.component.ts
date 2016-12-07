import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.css']
})
export class ListResultsComponent implements OnInit {

  restaurants: Restaurant[] = []

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    //this.loadRestaurants();

    //console.log(this.restaurantService.getRestaurants());
  }


}
