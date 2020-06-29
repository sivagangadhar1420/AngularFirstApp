import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { EmployesComponent } from './employes/employes.component';
import { ResEmployeeComponent } from './res-employee/res-employee.component';
import {PersonDetailsComponent} from './PersonDetails.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { InpComponent } from './inp/inp.component';
import { InpOtpComponent } from './inp-otp/inp-otp.component';
import { SecondSizerComponent } from './second-sizer/second-sizer.component';
import {ThirdSizerComponent} from './ThirdSizer.component';
import{SizerComponent} from './sizer.component';
import { BsComponent } from './bs/bs.component';
import {EmpFormComponent} from './emp.form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ServerFormsComponent } from './server-forms/server-forms.component';
import { FormBuildersComponent } from './form-builders/form-builders.component';
import { PipesFolderComponent } from './pipes-folder/pipes-folder.component';
import { AngResponsiveComponent } from './ang-responsive/ang-responsive.component';
import {AgePipe} from '../../age.pipe';
import{EmpPipe} from './emp-pipe';
import {EmpServices} from './emp.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    EmployesComponent,
    ResEmployeeComponent,
    PersonDetailsComponent,
    PersonalDetailsComponent,
    InpComponent,
    InpOtpComponent,
    SecondSizerComponent,
    ThirdSizerComponent,
    SizerComponent,
    BsComponent,
    EmpFormComponent,
    ServerFormsComponent,
    FormBuildersComponent,
    PipesFolderComponent,
    AngResponsiveComponent,
    AgePipe,
    EmpPipe,
    
    
    
    
    
  ],
  entryComponents : [AlertSuccessComponent, AlertDangerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmpServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
