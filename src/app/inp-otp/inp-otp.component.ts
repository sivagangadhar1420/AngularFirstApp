import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-inp-otp',
  templateUrl: './inp-otp.component.html',
  styleUrls: ['./inp-otp.component.css']
})
export class InpOtpComponent implements OnInit {
  @Input("fn1") firstName:string;
  @Input() lastName:string;

  @Output("fn1Change") firstNameChange = new EventEmitter<string>();
  @Output() lastNameChange = new EventEmitter<string>();  

  changeFirstName(fn:string){
    this.firstName = fn;
    this.firstNameChange.emit(fn);

  }
  changeLastName(fn:string){
    this.lastName = fn;
    this.lastNameChange.emit(fn);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
