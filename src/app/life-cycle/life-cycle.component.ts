import { Component, OnInit,OnChanges, OnDestroy,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges,OnDestroy, DoCheck,AfterContentInit,AfterContentChecked, AfterContentInit, AfterViewChecked{

constructor(){}
title = "Its Going to be Print";
  ngOnChanges(){
    console.log("OnChanges Fired");
    }

ngOnInit() {
    console.log("On OnitFird");
    }

  
ngOnDestroy(){
    console.log("Destroy Fired");

    }
 ngAfterContentInit() {
      console.log("On ContentOnit");
      
    }

    ngAfterContentChecked() {
      console.log("On Content Checked");
      
    }
    ngAfterViewChecked(){
      console.log("View checked");
      
    }
    ngAfterViewInit(){
      console.log("View Init");
      

    }
    ngDoCheck() {
      console.log("On DoCheck");
      
    }

}
