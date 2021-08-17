import { Component, OnInit } from '@angular/core';
import { Car } from './model/car.model';

import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dogs-app';
  cars:Car[]=[];
  //Constructor injection
  constructor(private carService:CarService){
  }

  ngOnInit(): void {
      this.cars= this.carService.findCar();
  }

}
