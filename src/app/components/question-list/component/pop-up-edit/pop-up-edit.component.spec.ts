import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditComponent } from './pop-up-edit.component';

describe('PopUpEditComponent', () => {
  let component: PopUpEditComponent;
  let fixture: ComponentFixture<PopUpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
