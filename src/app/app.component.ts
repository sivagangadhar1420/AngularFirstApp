import { Component, Input } from '@angular/core';
import {AlertSuccessComponent} from './alert-success/alert-success.component';
import {AlertDangerComponent} from './alert-danger/alert-danger.component';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template:`Sum of add(a,b) is {{add(1,2)}}
  // <br>
  //     <p>Increment of 10 is {{incfunn1(10)}} ,
//                                        
                                                    // Toggle
// template:` 
// <div>
// <input type="button" value="Toggle" (click)="toggleFunn()" />
// <div *ngIf= "show ; then ifPart; else elsePart">Text is Toogle Text</div> 
// <ng-template #ifPart><div> This is IF Part </div></ng-template>
// <ng-template #elsePart> <div>This is Else Part </div> </ng-template> </div>
   
//                                                 OR
// <div>
// <input type="button" value="Toggle" (click)="toggleFunn()" />
// <div *ngIf= "show ;  else elsePart"><div> This is IF Part </div></div> 
// <ng-template #elsePart> <div>This is Else Part </div> </ng-template> </div>


// `, 

                              // NgSwitch Case:
// template:`Duration: <span [ngSwitch] ="Duration">
// <span *ngSwitchCase = "0">Daystart</span>  
// <span *ngSwitchCase = "7">OneWeek</span>  
// <span *ngSwitchCase = "30">Month</span> 
//  <span *ngSwitchCase = "364">Year</span>
//  <span *ngSwitchDefault>Plz Check Once</span>  </span>
//  <hr>

// <span *ngFor = 'let rs of Arry; let i=index'>
// <span *ngIf = "i !== 0 " > , </span>
// {{i}}:
// {{rs}}
// </span>
// <select [(ngModel)] = "selected"><option *ngFor="let sa of Arry; let i=index" >{{sa}}</option></select>
// <select [(ngModel)] = "selected">
// <ng-container *ngFor = "let fres of Arry">
// <ng-container *ngIf = "fres !== 'NodeJs' ">
// <option [ngValue] = "fres">{{fres}}</option></ng-container>
// </ng-container></select>
// <input type="text" [(ngModel)]= "selected">

// <app-life-cycle></app-life-cycle><br><br><br>
    
                                            // Switching Alert succes and Danger Component (254)
// <div>
// <ng-container *ngComponentOutlet="alert" ></ng-container> 
// <input type="button" value="ToggleColors" (click)="toggleSwitch()" /></div>`, 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                              OneWayData Bindings
// template:`
//                                         <h2>Propert Binding</h2>

// <button [disabled] = 'Modified'>ClickMe</button>
// <button [hidden] = '!Modified'>ClickMe</button>
// <input type="text" [disabled] = 'Modified' />
// <input type="text" bind-value= "titles1" />
// <input type="text" [value]= "titles1" />
// <input type="text" value= "{{titles1}}" />


//                                         <h2>InrPolation Binding</h2>
//         {{titles1}}
//         <input type="text" value= "{{titles1}}" />
//         <button (click) = "btnfunn($event)" value="Button">{{titles1}}</button>{{ft}}

//                                   <h2>Event Binding</h2>

// <img src="assets/images/spy.png" (mouseover)="onMouseOver($event)" (mouseout)="onMouseOut($event)" 
//  class="img-fluid" style="height:7rem; width:7rem">
//  <button (click)= "resFunn1($event)" (dblclick) = 'resFunn1($event)'>ClickMe</button>

//  EvetType : {{evType}}

//  <img src="assets/images/spy.png" (mouseover)="mouseFunn($event)" (mouseout)="mouseFunn($event)" 
//  class="img-fluid" style="height:7rem; width:7rem">
// <input type="text" (keyup) = "ffunn($event)">
// PressedKeys: {{keyPressed}}
// Values : {{vals}}

// <img #imgg1 src="assets/images/spy.png" (mouseover)="imgg1.src='assets/images/spy.png'" (mouseout)="imgg1.src='assets/images/dice1.png'" 
//  class="img-fluid" style="height:7rem; width:7rem">
//  <input type="text" (keyup) = "mfunn1($event)">
//  <input type="text" (keyup) = "mfunn2($event)">
//  <input type="text" (keyup.enter) = "mfunn22($event)"><br><br><br><br>
//  <input type="text" (keyup.enter) = "mfunn24($event)" (change) = mfunn23($event)>

//  {{tt}}
//  {{tt1}}
//  {{ft}} 

// 
// `,

// TwoWay Data bindings

// template:`<person-detail name="Raju" lname="King"></person-detail>
// <h1>App INP  Working</h1>
// <app-inp [nm1]="Raju" [gender]="Male" [pd] = "PersonName" pd1="{{PersonName}}"></app-inp>

// <app-inp-otp [(fn1)]="fn" [(lastName)] = "ln"></app-inp-otp><br>
//         <h2>Hello to  {{fn}} {{ln}} from AppComponent</h2>
        
// <h1>App Inp Out Put Working</h1>

// <h1>App Sizer Working</h1>

// <my-sizer [(sz)]="fontSize"></my-sizer>
// <div [style.font-size.px]="fontSize">Some sample Text</div>

// <app-second-sizer></app-second-sizer>
// <button class="btn btn-primary">HitMe</button>

// <button class="btn btn-primary">HitMe</button>
// 
//         `, 


// template:`
// <h1>Template Driven Forms</h1>

// <h1>Template Driven HTML5 Forms</h1>
// <app-bs></app-bs>


// <h1>React Native Forms</h1>
// <emp></emp>

    // <h1>Data Server forms</h1>
// <app-server-forms></app-server-forms>

//  Data Form Builder Forms 
// <app-form-builders></app-form-builders>

//   `,


// template:`

// <br>

// <h1>Data From Builders</h1>

// <app-form-builders></app-form-builders>

// <br>

// <app-server-forms></app-server-forms>


  // `,
  // template:`<app-pipes-folder></app-pipes-folder>
  // <app-ang-responsive></app-ang-responsive>


 template:`
  <br>
  <app-pipes-folder></app-pipes-folder>

  
  `
,
        
                        // Simple Print
// template : `<app-employes></app-employes>`,
                        // Simple Print

  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
  fontSize=10;
    fn="Virat";
    ln= " Kohili";

  PersonName: string = "SandepSoni"
  // data1 = "Story";
  data1 = "";
  Modified = true;
  ltml = "aaaaaaaaaascawa";
  keyPressed= "";
  vals="";
  tt = "";
  tt1= "";
  checking:Boolean;
  ft="";
  titles1 = "Text of the Button";
  btnfunn(e){
    this.ft = e.target.value;
    this.ft = this.titles1;
  }
  mfunn23(rt:any){
      this.ft = rt.target.value;
      alert(this.ft)
    }
    mfunn24(rt:any){
      this.ft = rt.target.value;
      alert(this.ft)

    }
  
  mfunn22(rt:any){
    this.ft = rt.target.value;
    alert(this.ft)
  }
  mfunn1(mt:any){
    this.tt = mt.target.value;
  }
  mfunn2(rt1:any){
    this.tt1 = rt1.target.value;
  }
  ffunn(rt:any){
    this.keyPressed += rt.key;  
    this.vals = rt.target.value; 
  }

  // funn1(){
  //   alert("ClickedME")
  // }
  // funn2(){
  //   alert("Clicked");
  // }
  // evType="";

  // onMouseOver(evt: any){
  //   evt.target.src = 'assets/images/spy.png';
  //   this.evType = evt.type;
  // }

  // onMouseOut(evt: any){
  //   evt.target.src = 'assets/images/dice1.png';
  //   this.evType = evt.type;
  //   // console.log("Out");
    
 
  // }
  resFunn1(rt : any){
    if(rt.type == 'click'){
    // rt.target.src = 'assets/images/dice2.png';
    // console.log(rt.type);
    
    // console.log("Clicked");
  }else if(rt.type == 'dblclick'){
    rt.target.src = 'assets/images/spy.png';
    console.log(rt.type);
    

  
  }
  }

    

//   mouseFunn(evt :any)
// {
//   if(evt.type == 'mouseover'){
//     evt.target.src = 'assets/images/spy.png';

//   }
//   else{
//     evt.target.src = 'assets/images/dice1.png';
//   }
// }  
  

  
  // alert = AlertSuccessComponent;
  //  toggleSwitch(){
  //    if(this.alert == AlertSuccessComponent){
  //      this.alert = AlertDangerComponent;
  //   } else{
  //     this.alert =  AlertSuccessComponent ;
  //    }
  //  }


  
    
  // Duration:number = 81;
  // Arry = ["Mern", "NodeJs", "Angular"];
  // selected : string = "Angular";
  // // title = 'WelcomeComponent';
  // title1="WelcomeComponent";
  // title2="WelcomeComponent";
  // // data = "";
  // Course= "Angular 7";
  // WB = " Yes  i am much interested WB";
  // formtext = "New Text";
  //  dt= new Date();
  //   add(a:number,b:number) :number {
  //    return  a + b;
  //  }
  //  incfunn1(inc){
  //    return ++inc;
  //  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // show = false;
  // toggleFunn(){
  //   if(!this.show){
  //     this.show = true;
      
  //   }else{
  //     this.show = false;   
  //   }
  // }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // show = true;
  // toggleFunn(){
  //   if(!this.show){
  //     this.show = true;
      
  //   }else{
  //     this.show = false;   
  //   }
  // }
      

   

}
