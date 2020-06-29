import{Component, OnInit, ViewChild} from '@angular/core';
import {BluePrintEmp} from '../BluePrintEmp';
import {FormGroup, FormControl,FormBuilder,  Validators} from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
import { debounceTime } from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-form-builders',
  templateUrl: './form-builders.component.html',
  styleUrls: ['./form-builders.component.css']
})
export class FormBuildersComponent implements OnInit {
  constructor (private fba: FormBuilder){}

  @ViewChild('fnForm', {static:false}) fnForm:any;
  blueprintEmp:BluePrintEmp;

  firstName:FormControl;
  lastName:FormControl;
  gender:FormControl;
  qualifications:FormControl;
  empFormss:FormGroup;
  public changer:string[] = [];
  
  ar=["M.Tech", "B.Tech", "PG", "MCS","MS", "BSC"];
  ngOnInit():void{
      
          this.blueprintEmp = new BluePrintEmp();
          this.blueprintEmp.startingName = "Raju";
          this.blueprintEmp.finalName = "King";
          this.blueprintEmp.gender = "Male";
          this.blueprintEmp.education = "B.Tech";
         
          this.empFormss = this.fba.group({
fName :['virat',  [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}'), Validators.maxLength(20)]],
lName :['ABD',  [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}'), Validators.maxLength(20)]],
type : ['Male'],
degrees: ['B.Tech']
          
          });
  
this.empFormss.get('fName').valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((chng)=>{this.changer.push(chng)})
          
             this.empFormss.setValue({
             fName:this.blueprintEmp.startingName,
             lName:this.blueprintEmp.finalName,
             type:this.blueprintEmp.gender,
             degrees:this.blueprintEmp.education

         })
     
         }



  // createFormcontrols(){
  //     // this.firstName = new FormControl();
  //     // this.lastName = new FormControl();
  //     // this.firstName = new FormControl('Virat', [ Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')  ]);
  //      this.firstName = new FormControl('Virat', [ Validators.required,Validators.pattern('[a-zA-Z0-9]{6,30}'),Validators.maxLength(30)]);
  //     this.firstName.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).subscribe((chng)=>{
  //         this.changer.push(chng)
  //     })
  //      this.lastName = new FormControl('ABD' ,   [ Validators.required, Validators.pattern('[a-zA-Z0-9]{6,30}'),Validators.maxLength(6)]);
  //     this.gender = new FormControl("Male");
  //     this.qualifications = new FormControl("B.Tech");
      
  // }

  // createForm(){
  //     this.empFormss =new FormGroup({
  //         fName : this.firstName,
  //         lName:this.lastName,
  //         type:this.gender,
  //         degrees:this.qualifications
  //     })
  // }
message:string = "";
onSubmit(fn:any){   
  if(this.fnForm.valid){
      alert("valid" + " " +  fn.fName+ " " + fn.lName);
      this.message = "Form is Valid";
      // this.fnForm.reset();
      this.empFormss.reset();
       }
  else{
      this.message = "Form is InValid";
  
  }
}


  public fls: File = null;

    inpFiles(st){
      console.log(" st ", st)
      this.fls = st.target.files;
      console.log(" after selected ", this.fls);
  }
  image = "";
imgUpload(fm:any){
    fm.target.src="assets/images/spy1.jpg";
    this.image = fm.target.src;
  //   console.log(fm.target.src);
    

}
}
