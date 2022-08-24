import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddQuestionComponent } from './pop-up-add-question.component';

describe('PopUpAddQuestionComponent', () => {
  let component: PopUpAddQuestionComponent;
  let fixture: ComponentFixture<PopUpAddQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpAddQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
