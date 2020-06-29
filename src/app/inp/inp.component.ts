import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  // template:`sum of inc nos are {{incFunn1(10)}}`,
  styleUrls: ['./inp.component.css']
})
export class InpComponent implements OnInit {

  @Input("nm1") name:string;
  @Input() gender:string;
  @Input() pd :string;
  @Input() pd1:string;
  @Input() PersonName: string;
  @Output() firstName = new EventEmitter<string>();
  @Output() lastName = new EventEmitter<string>();
  


  incFunn1(inc){
    return ++inc;
  }
  sum(a,b){
    return a+b;
  }
  
  

  constructor() { }

  ngOnInit() {
  }

}
