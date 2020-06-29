import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpOtpComponent } from './inp-otp.component';

describe('InpOtpComponent', () => {
  let component: InpOtpComponent;
  let fixture: ComponentFixture<InpOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
