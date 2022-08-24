import { ChildrenOutletContexts } from '@angular/router';
import { Question } from '@app/components/question/store/model/question';

export class Choix {
  id: number;
  description: string;
  questions: Question;
  correctResponse: Boolean;

  constructor(id: number, description: string, questions: Question, correctResponse: Boolean) {
    this.id = this.id;
    this.questions = this.questions;
    this.description = this.description;
    this.correctResponse = this.correctResponse;
  }
}
