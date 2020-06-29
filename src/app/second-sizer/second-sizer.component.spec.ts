import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSizerComponent } from './second-sizer.component';

describe('SecondSizerComponent', () => {
  let component: SecondSizerComponent;
  let fixture: ComponentFixture<SecondSizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
