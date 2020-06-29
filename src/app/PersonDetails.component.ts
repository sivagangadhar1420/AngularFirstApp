import {Component, Input} from '@angular/core';
import { Person } from './person';

// import { Person } from './person';
@Component({
    selector:'person-detail',
    template:`FirstName: <input type="text" [value]="emp1.FirstName">
              LastName : <input type="text" [value]= "emp1.LastName">  
              <br><br><br><br><br>

              <h2>TwoDataBinding With NgModel</h2>
              FirstName: <input type="text" [(ngModel)]="emp1.FirstName">
              LastName : <input type="text" [(ngModel)]= "emp1.LastName">  <br> <br> <br>
              {{emp1.FirstName}}
              {{emp1.LastName}}
              <br><br><br><br><br>
              <input type="text" [(ngModel)]="FirstName"> {{FirstName}}
              <input type="text" [(ngModel)]= "LastName"> {{LastName}}
              


             
              
              <br><br><br><br><br>

              
               <input type="text" [value] = "emp1.FirstName" id="inp1" (input) = "nmFunn1($event)">
               <input type="text" [value] = "emp1.LastName" id="inp2" (input) = "nmFunn2($event)" >  
              
              FirstName:{{fn}} <br>
              LasttName:{{sn}}
              <br><br><br>
              <input type="text" [ngModel]= "emp1.FirstName" name="nm11"(ngModelChange)="cFunn1($event)">
              <br> {{uc}} 
              <h2>{{name}}{{lname}}</h2>

            
              `
})
export class PersonDetailsComponent{
    emp1:Person = new Person("Raju", "Kumar");
    fn="";
    sn="";
    uc= "";
nmFunn1(et:any){
this.fn = et.target.value;
}
nmFunn2(et:any){
    this.sn = et.target.value;
}
cFunn1(rt:string){
   this.uc = rt.toUpperCase();

}
@Input() name:string;
@Input() lname:string;

}