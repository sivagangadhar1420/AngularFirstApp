import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildersComponent } from './form-builders.component';

describe('FormBuildersComponent', () => {
  let component: FormBuildersComponent;
  let fixture: ComponentFixture<FormBuildersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuildersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
