import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularapp2';
  name: string;
  age: number;
  numArray: number[];
  strArray: Array<string>;
  dynamicValue: any;
  IsTrue: boolean;
  tupleVal: [string, number, boolean];
  student: object;
  employee: Employee;

  constructor() {
    this.name="Ashish";
    this.age = 52;
    this.numArray = [10, 11, 20];
    this.strArray = ["Ashish", "Kumar", "Tiwary"];
    this.dynamicValue = 10000;
    this.IsTrue = false;
    this.tupleVal = ["Ashish", 45, true];
    this.student = { name: "Ashish", age: "45", email: "a@b.com" }

    this.employee = new Employee();
    this.employee.Name = "Rose";
    this.employee.Salary = 52000;
    this.employee.Department = "Development";
    this.employee.IsActive = true;
    }
    Test(mynum: number,str:string): number {
      return 25;
    }
  }
  export class Employee {
    Name?: string;
    Salary?: number;
    Department?: string;
    IsActive?: boolean;
}

    
    
