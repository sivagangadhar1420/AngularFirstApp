import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesFolderComponent } from './pipes-folder.component';

describe('PipesFolderComponent', () => {
  let component: PipesFolderComponent;
  let fixture: ComponentFixture<PipesFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
