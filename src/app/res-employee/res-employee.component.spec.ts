import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResEmployeeComponent } from './res-employee.component';

describe('ResEmployeeComponent', () => {
  let component: ResEmployeeComponent;
  let fixture: ComponentFixture<ResEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
