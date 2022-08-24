import { Component, OnInit } from '@angular/core';
import { DashboardServiceHttp } from '@app/components/dashboard/store/services/dashboard.service.http';
import { QuestionHttpService } from '@app/components/question/store/services/question.service.http';
import { interval } from 'rxjs';
import { Result } from '@app/components/question/store/model/Result';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  result = new Result();
  public name: string = '';
  public questionsList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  wrongAnswer: number = 0;
  isQuizCompleted: boolean = false;
  interval$: any;
  progress: string = '0';
  idTest: number;
  selectedOption: any = null;
  currenntQuestionNum: number;

  constructor(private questService: QuestionHttpService, private dashboardServiceHttp: DashboardServiceHttp) {}

  ngOnInit() {
    this.name = localStorage.getItem('name')!;
    this.getRandQuestions();
    this.idTest = this.dashboardServiceHttp.getId();
  }

  nextQuestion() {
    // if (this.currentQuestion > this.questionsList.length - 2) this.isQuizCompleted = true;
    // else this.currentQuestion++;

    if (this.selectedOption != null && this.selectedOption) {
      this.points += 10;
      this.correctAnswer++;
    } else {
      this.wrongAnswer++;
    }
    if (this.currentQuestion === this.questionsList.length - 1) {
      this.isQuizCompleted = true;
      this.result.nbQuestCorrect = this.correctAnswer;
      this.result.nbQuestIncorrect = this.wrongAnswer;

      console.log(this.result.nbQuestCorrect);
      console.log(this.result.nbQuestIncorrect);
      this.dashboardServiceHttp.setResult(this.idTest, this.result).subscribe((res) => {});

      this.startCounter();
    }

    this.currentQuestion++;
    this.resetCounter();
  }

  answer(currQuesNum: number, option: any) {
    this.currenntQuestionNum = currQuesNum;
    this.selectedOption = option.correctResponse;
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.nextQuestion();
        // this.currentQuestion++;
        this.counter = 60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  getRandQuestions() {
    this.dashboardServiceHttp.getQuestions(this.idTest).subscribe((res) => {
      console.log(res);
      this.questionsList = res;
      this.startCounter();
    });
  }

  // envoieResultTest() {
  //   this.dashboardServiceHttp.setResult(this.idTest, this.result).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
