import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  bikeList: Array<Bike> = [];

  constructor() { }

  ngOnInit(): void {
    this.bikeList.push(
      { Name: "Royal enfield Classic 350 Black", Price: "1.4Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car1.jpg" },
      { Name: "Royal enfield Classic 350 Green", Price: "1.4Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car2.jpg" },
      { Name: "Royal enfield Classic 350 GMetal", Price: "1.4Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car1.jpg" },
      { Name: "Royal enfield Classic 350 Red", Price: "1.4Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car2.jpg" },
      { Name: "Royal enfield Thunder bird Black", Price: "1.7Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car1.jpg" },
      { Name: "Royal enfield Thunder bird Blue", Price: "1.7Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car2.jpg" },
      { Name: "Royal enfield Thunder bird Red", Price: "1.7Lakh", Mileage: "37kmpl", Model: 2018, ImagePath: "../assets/car1.jpg" },
    )
  }
}
class Bike {
  Name?: string;
  Model?: number;
  Price?: string;
  Mileage?: string;
  ImagePath?: string;
}