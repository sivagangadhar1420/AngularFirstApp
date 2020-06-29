import { Component, OnInit, Input } from '@angular/core';
import { Employee, EmpType } from '../employee';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',

                  //Simple Print 
  // template:`<app-res-employee></app-res-employee>`,
                  //Simple Print

  styleUrls: ['./employes.component.css']
})
export class EmployesComponent{
    // emp;
    @Input() emp:Employee
    constructor() { 
    // this.emp= new Employee(1,"Raju",30,30000,EmpType.Permenent,new Date('08/20/2020'));
      }
      @Input() selected:Boolean;
   

  }

