import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model/car.model';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cars-app';
  cars:Car[]=[];
  tpmessage:string="";
  pmessage="This message for the header!"

  public dooMessage(message:any){
    this.tpmessage=message;
  }

  //Constructor injection

  constructor(private carService:CarService){
  }

  ngOnInit(): void {
     this.carService.findCar().subscribe((data) => this.cars = data);
      

}
}
