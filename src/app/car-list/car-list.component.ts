import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input("parents")
  dcars:Car[]=[];

  tname:string="";


  @Output()
  messageToParent:EventEmitter<String>=new  EventEmitter<String>();

  //Constructor injection
  constructor(){
  }

  ngOnInit(): void {
      
  }

  pushMessage(){
    console.log("Helllo "+this.tname);
    this.messageToParent.emit(this.tname);
  }

}
