import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

   //creating List of Dog type
   public car:Car[]=[];

  constructor(private http:HttpClient) { 

  }

  public findCar() :Observable<Car[]> {
  
    return this.http.get<Car[]>("http://localhost:4200/v5/cars");
  }
}
