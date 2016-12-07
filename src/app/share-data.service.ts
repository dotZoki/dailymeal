import { Injectable } from '@angular/core';
import {Restaurant} from "./restaurant";

@Injectable()
export class ShareDataService {

  restaurants: Restaurant[];

  constructor() { }

}
