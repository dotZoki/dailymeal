import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Restaurant} from "./restaurant";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {

  private url = 'app/restaurants';

  constructor(private http: Http) { }

  getRestaurants(): Promise<Restaurant[]> {
    return this.http.get(this.url)
        .toPromise()
        .then(response => response.json().data as Restaurant[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
