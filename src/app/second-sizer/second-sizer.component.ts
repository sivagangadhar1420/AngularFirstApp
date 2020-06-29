import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-sizer',
  templateUrl: './second-sizer.component.html',
  styleUrls: ['./second-sizer.component.css']
})
export class SecondSizerComponent implements OnInit {
  clr="red";
  bc="blue";
  res = false;
  clr1="bg"; 
  rg="lg";
  isSavable=false;
  isModifieds= true;
  isFinalREs=true;
  setClasses(){
    let cls= {savable:this.isSavable, modifieds:this.isModifieds, finalres:this.isFinalREs, res:this.isres};
       
    return cls;
  }
  isres = true;
    setStyles(){
    let styls= {
      "font-style": this.isSavable ? 'itlic' : 'bold',
      "padding" : this.isModifieds ? '20px': '0px',
      "background-color": this.isFinalREs ? 'red' : 'Blue',
      "color" : this.isres ? "green" : "yellow"
    
     }
     return styls;
  }

  constructor() { }

  ngOnInit() {
  }

}
