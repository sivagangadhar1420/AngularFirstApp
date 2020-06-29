import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngResponsiveComponent } from './ang-responsive.component';

describe('AngResponsiveComponent', () => {
  let component: AngResponsiveComponent;
  let fixture: ComponentFixture<AngResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
