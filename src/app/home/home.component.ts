import {Component, OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant";
import {Subject, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  //restaurants: Restaurant[] = []
  restaurants: Observable<Restaurant[]> = this.restaurantService.getRestaurants();
  randomRestaurants: Observable<Restaurant[]>;

  public searchFor = "name";


  private searchTerms = new Subject<string>();

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurants = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
          // return the http search observable
          ? this.restaurantService.search(term, this.searchFor)
          // or the observable of empty if no search term
          //: Observable.of<Restaurant[]>([]))
          : this.restaurantService.getRestaurants())
          //: this.randomRestaurants)
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Restaurant[]>([]);
      });

    this.loadRestaurants();
    //this.doSearch("Palace");
  }

  ngAfterViewInit() {
    this.doSearch("");
  }

  doSearch(term: string) {
    this.searchTerms.next(term);
    this.restaurants.retry()
  }

  triggerTermSearch(term: string, searchFor: string) {
    this.searchFor = searchFor;
    this.doSearch(term);
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().toPromise().then(
        restaurants => this.randomRestaurants = Observable.of(restaurants.sort( function() { return 0.5 - Math.random() } ).slice(0,5))
    )
  }

}
