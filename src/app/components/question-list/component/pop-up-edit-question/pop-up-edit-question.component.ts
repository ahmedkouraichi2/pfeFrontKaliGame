import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';
import { DomainHttpService } from '@app/components/question-list/store/services/domain.service.http';
import { Choix } from '@app/components/question/store/model/choix';
import { Question } from '@app/components/question/store/model/question';

@Component({
  selector: 'app-pop-up-edit-question',
  templateUrl: './pop-up-edit-question.component.html',
  styleUrls: ['./pop-up-edit-question.component.scss'],
})
export class PopUpEditQuestionComponent implements OnInit {
  option: string;
  question: Question;
  choixSelect: Choix[];
  show: Boolean = false;
  constructor(
    private langageServiceHttp: LangageServiceHttp,
    private domainService: DomainHttpService,
    public dialogRef: MatDialogRef<PopUpEditQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data.result[0].question);
    this.question = new Question(this.data.result[0].id, this.data.result[0].question, this.data.result[0].language);
    this.question.id = this.data.result[0].id;
    this.question.langage = this.data.result[0].language;
    this.question.question = this.data.result[0].question;
    this.question.choix = this.data.result[0].choix;
    console.log('efefeef');
    console.log(this.question.langage);
  }
  save() {
    console.log();
    this.langageServiceHttp.updateQuestion(this.question).subscribe((res: any) => {
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
      if (this.question.choix[i].correctResponse) {
        return true;
      }
    }
    return false;
  }
}
