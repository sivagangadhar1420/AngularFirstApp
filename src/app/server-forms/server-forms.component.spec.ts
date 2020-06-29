import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFormsComponent } from './server-forms.component';

describe('ServerFormsComponent', () => {
  let component: ServerFormsComponent;
  let fixture: ComponentFixture<ServerFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
