import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject, Observable} from "rxjs";
import {Restaurant} from "../restaurant";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  @Output() onListUpdated = new EventEmitter();

  restaurants: Observable<Restaurant[]>;
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  doSearch(term: string) {
    this.searchTerms.next(term);

    console.log('doSearch');
    //console.log(this.restaurants);
    this.onListUpdated.emit(this.restaurants);
  }

  ngOnInit() {
    this.restaurants = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.searchService.searchForRestaurantByName(term)
            // or the observable of empty heroes if no search term
            : Observable.of<Restaurant[]>([]))
        .catch(error => {
          // TODO: real error handling
          console.log(error);
          return Observable.of<Restaurant[]>([]);
        });
  }

}
