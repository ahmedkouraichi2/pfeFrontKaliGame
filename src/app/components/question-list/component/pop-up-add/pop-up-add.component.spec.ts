import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddComponent } from './pop-up-add.component';

describe('PopUpAddComponent', () => {
  let component: PopUpAddComponent;
  let fixture: ComponentFixture<PopUpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
