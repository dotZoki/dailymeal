import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }


  restaurants: Restaurant[] = [];

  ngOnInit() {
    this.restaurantService.getRestaurants()
        .then(restaurants => this.restaurants = restaurants.sort( function() { return 0.5 - Math.random() } ).slice(0,5))
    ;
  }

  listUpdated(list) {
    console.log(list);
  }

}
