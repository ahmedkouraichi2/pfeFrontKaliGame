import { ChildrenOutletContexts } from '@angular/router';
import { Langage } from '@app/components/langage/store/model/langage';
import { Choix } from '@app/components/question/store/model/choix';

export class Question {
  question: String = null;
  id: number = null;
  langage: Langage;
  choix: Choix[];

  constructor(id: number, name: string, langage: Langage) {
    this.question = this.question;
    this.id = this.id;
  }
}
