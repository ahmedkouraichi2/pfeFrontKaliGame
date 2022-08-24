import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';
import { DomainHttpService } from '@app/components/question-list/store/services/domain.service.http';
import { Choix } from '@app/components/question/store/model/choix';
import { Question } from '@app/components/question/store/model/question';

@Component({
  selector: 'app-pop-up-add-question',
  templateUrl: './pop-up-add-question.component.html',
  styleUrls: ['./pop-up-add-question.component.scss'],
})
export class PopUpAddQuestionComponent implements OnInit {
  option: string;
  question: Question;
  choixSelect: Choix[];
  show: Boolean = false;
  constructor(
    private langageServiceHttp: LangageServiceHttp,
    private domainService: DomainHttpService,
    public dialogRef: MatDialogRef<PopUpAddQuestionComponent>
  ) {}

  ngOnInit(): void {
    this.question = new Question(null, null, null);
    this.question.langage = new Langage(null, null);
    this.question.langage.id = this.domainService.id;
    this.question.choix = [];
  }
  save() {
    console.log(this.question);

    this.langageServiceHttp.addQuestion(this.question).subscribe((res: any) => {
      console.log(res);
      this.onNoClick();
    });
    //   let langage = new Langage(null, this.name);
    //   console.log(langage);
    //   this.langageServiceHttp.addDomaine(langage).subscribe((res: any) => {
    //     console.log(res);
    //     this.onNoClick();
    //   });
    //
  }

  saveChoix() {
    console.log(this.question);
    let choix = new Choix(null, null, null, null);
    choix.description = this.option;
    choix.id = null;
    choix.questions = null;
    choix.correctResponse = false;
    this.question.choix.push(choix);
    this.option = null;

    //   let langage = new Langage(null, this.name);
    //   console.log(langage);
    //   this.langageServiceHttp.addDomaine(langage).subscribe((res: any) => {
    //     console.log(res);
    //     this.onNoClick();
    //   });
    //
  }
  delete(id) {
    console.log(id);
    console.log(this.question.choix.splice(id, 1));
    console.log(this.question.choix);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  checkCheckBoxvalue(event, id) {
    console.log('-----------------------------------------');
    console.log(event.target.checked);
    if (event.target.checked) this.question.choix[id].correctResponse = true;
    else this.question.choix[id].correctResponse = false;
    console.log(this.question.choix[id]);
  }
  checkResp() {
    for (let i = 0; i < this.question.choix.length; i++) {
      if (this.question.choix[i].correctResponse) return true;
    }
    return false;
  }
}
