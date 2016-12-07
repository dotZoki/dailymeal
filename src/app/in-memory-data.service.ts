import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Restaurant} from "./restaurant";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {
    let restaurants = [
      {
        id: 11, name: "The Western Palace", rating: 3, address: "Tivolska 20, Ljubljana", todays_meals: [
        {
          "id": 1,
          "name": "Jota",
          "image": "http://lorempixel.com/400/200/food/?1",
          "price": 9.52,
          "options": ["meat", "vegan", "vegeterian"]
        }, {
          "id": 2,
          "name": "Žganci",
          "image": "http://lorempixel.com/400/200/food/?2",
          "price": 8.78,
          "options": ["meat", "vegan", "vegeterian"]
        }, {
          "id": 3,
          "name": "Beef soup",
          "image": "http://lorempixel.com/400/200/food/?3",
          "price": 2.99,
          "options": ["meat", "vegan", "vegeterian"]
        }

      ]
      },
      {
        id: 12, name: "The Tandoori Wharf", rating: 2, address: "Slovenska cesta 29, Ljubljana", todays_meals: [
        {
          "id": 14,
          "name": "facilisi cras non velit",
          "image": "http://lorempixel.com/400/200/food/?15",
          "price": 9.89,
          "options": [
            "vegan", "vegeterian"
          ]
        }, {
          "id": 24,
          "name": "in hac habitasse",
          "image": "http://lorempixel.com/400/200/food/?25",
          "price": 9.22,
          "options": [
            "vegan", "vegeterian"
          ]
        }, {
          "id": 3,
          "name": "justo sollicitudin ut suscipit",
          "image": "http://lorempixel.com/400/200/food/?34  ",
          "price": 9.7,
          "options": ["meat"]
        }
      ]
      },
      {
        id: 13, name: "The Honey Canteen", rating: 3, address: "Tržaška cesta 32, Ljubljana", todays_meals: [
        {
          "id": 6,
          "name": "quisque ut",
          "image": "http://lorempixel.com/400/200/food/?6",
          "price": 8.28,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }, {
          "id": 7,
          "name": "eu",
          "image": "http://lorempixel.com/400/200/food/?7",
          "price": 8.44,
          "options": [
            "vegan", "vegeterian"
          ]
        }
      ]
      },
      {
        id: 14, name: "The Central Taste", rating: 4, address: "Topniška ulica 4, Ljubljana", todays_meals: [
        {
          "id": 8,
          "name": "lobortis vel dapibus at",
          "image": "http://lorempixel.com/400/200/food/?8",
          "price": 9.46,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }, {
          "id": 9,
          "name": "orci eget orci vehicula",
          "image": "http://lorempixel.com/400/200/food/?9",
          "price": 8.27,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }, {
          "id": 10,
          "name": "neque aenean",
          "image": "http://lorempixel.com/400/200/food/?10",
          "price": 10.54,
          "options": ["meat"]
        }, {
          "id": 11,
          "name": "natoque",
          "image": "http://lorempixel.com/400/200/food/?11",
          "price": 10.67,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }
      ]
      },
      {
        id: 15, name: "The Champagne Crown", rating: 3, address: "Teslova 5, Ljubljana", todays_meals: [
        {
          "id": 12,
          "name": "dolor sit",
          "image": "http://lorempixel.com/400/200/food/?12",
          "price": 8.66,
          "options": ["meat"]
        }, {
          "id": 13,
          "name": "eleifend pede libero",
          "image": "http://lorempixel.com/400/200/food/?13",
          "price": 8.61,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }
      ]
      },
      {
        id: 16, name: "Crickets", rating: 3, address: "Tržaška cesta 303, Ljubljana", todays_meals: [
        {
          "id": 14,
          "name": "eget orci vehicula  curabitur",
          "image": "http://lorempixel.com/400/200/food/?14",
          "price": 10.63,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }, {
          "id": 15,
          "name": "sapien ut nunc",
          "image": "http://lorempixel.com/400/200/food/?15",
          "price": 9.97,
          "options": ["meat"]
        }
      ]
      },
      {
        id: 17, name: "The Hummingbird", rating: 5, address: "Cigaletova 4, Ljubljana", todays_meals: [
        {
          "id": 14,
          "name": "eget orci vehicula  curabitur",
          "image": "http://lorempixel.com/400/200/food/?14",
          "price": 10.63,
          "options": [
            "meat", "vegan", "vegeterian"
          ]
        }, {
          "id": 15,
          "name": "sapien ut nunc",
          "image": "http://lorempixel.com/400/200/food/?15",
          "price": 9.97,
          "options": ["meat"]
        }
      ]
      }
      //,
      // {id: 18, name: "Seawise", rating: 3, address: "Dolenjska cesta 432, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 19, name: "Oddity", rating: 3, address: "Trdinova 1, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 20, name: "Little Italy", rating: 4, address: "Dolenjska cesta 34, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 21, name: "The Paradise Emperor", rating: 3, address: "Celovška 1, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 22, name: "The Meadow Lobster", rating: 3, address: "Medvedova 44, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 23, name: "The Orange Cloud", rating: 5, address: "Opekarska 23, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 24, name: "The	 Caramel Window", rating: 3, address: "Cesta v Gorice 32, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 25, name: "The Queen's Ranch", rating: 3, address: "Gregorinova 34, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 26, name: "Robot", rating: 3, address: "Hajdrihova 14, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 27, name: "Limestone", rating: 5, address: "Topniška 54, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 28, name: "Beehive", rating: 3, address: "Šmartinska 74, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 29, name: "Embers", rating: 1, address: "Kogejeva 21, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 30, name: "The Grove", rating: 5, address: "Mikošičeva 66, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // },
      // {id: 31, name: "Marjetica", rating: 4.5, address: "Tobačna 2, Ljubljana", todays_meals: [
      //   {name: "", image: "http://lorempixel.com/400/200/food/?1", price: 12.99, options: ["meat", "vegeterian", "vegan"]}
      // ]
      // }
    ];

    return {restaurants};
  }

}
