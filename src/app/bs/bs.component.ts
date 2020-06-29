import { Component, OnInit,ViewChild } from '@angular/core';
import { StudentDetail  } from './StudentDetails';
import { SizerComponent } from '../sizer.component';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BsComponent implements OnInit {
  
  
  @ViewChild('formName',{static:false}) formName:any;
  

  opts =['Ang1', "Ang2", 'Ang3', 'Ang4', 'Ang5',  'Ang6', 'Ang7',  'Ang8',  'Ang9']
  
  std: StudentDetail = new StudentDetail(1,"Raju",30, 1000000, "Ang7");
  ang1:string = "Ang7";
   get res122() {
    return JSON.stringify(this.std)};

    newEmployee(){
      // this.std = new StudentDetail(1,"Virat",0,1,"Like");
      alert("Updated");
    }
    
    //(1) onSubmit(fm:any){
    //   alert(fm.controls.id.value + " " + fm.controls.name.value)
    //   fm.form.reset();
    //   this.std = new StudentDetail(1,"Virat",20,10000,"");
    // }


   
    onSubmit(){
      alert(this.formName.controls.id.value + " " + this.formName.controls.name.value)
      this.formName.form.reset();
      this.std = new StudentDetail(1,"Virat",20,10000,"");

    }
    
      submitForm(){
      alert(this.formName.controls.id.value + " " + this.formName.controls.name.value);
      this.formName.reset();
      this.std = new StudentDetail(1,"Virat",0,1,"Like");
    }
  
  constructor() { }

  ngOnInit() {
  }

}
