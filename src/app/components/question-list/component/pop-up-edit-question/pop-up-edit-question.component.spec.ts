import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditQuestionComponent } from './pop-up-edit-question.component';

describe('PopUpEditQuestionComponent', () => {
  let component: PopUpEditQuestionComponent;
  let fixture: ComponentFixture<PopUpEditQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEditQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
