import { Component, OnInit, Input } from '@angular/core';
import { Employee, EmpType } from '../employee';

@Component({
  selector: 'app-res-employee',
  templateUrl: './res-employee.component.html',
  
  styleUrls: ['./res-employee.component.css']
})
export class ResEmployeeComponent  {
  employees : Employee[] =[];

 constructor() { 
  this.employees[0] = new Employee (1,"Raju",23,30000,"Retired",new Date('09/24/2018'));
  this.employees[1] = new Employee (2,"Nikil",20,30000,"PrtTime",new Date('08/23/2021'));
  this.employees[2] = new Employee (3,"Kumar",22,30000,"Permenent",new Date('12/22/2020'));

 }
 selectedEmployee : Employee;
 
 SelectFunn(e){
   this.selectedEmployee = e;
 }

 

}
