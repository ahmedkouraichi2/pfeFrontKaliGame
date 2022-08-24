import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';
import { PopUpAddQuestionComponent } from '@app/components/question-list/component/pop-up-add-question/pop-up-add-question.component';
import { PopUpAddComponent } from '@app/components/question-list/component/pop-up-add/pop-up-add.component';
import { PopUpDeleteConfirmComponent } from '@app/components/question-list/component/pop-up-delete-confirm/pop-up-delete-confirm.component';
import { PopUpEditQuestionComponent } from '@app/components/question-list/component/pop-up-edit-question/pop-up-edit-question.component';
import { PopUpEditComponent } from '@app/components/question-list/component/pop-up-edit/pop-up-edit.component';
import { DomainHttpService } from '@app/components/question-list/store/services/domain.service.http';
import { Question } from '@app/components/question/store/model/question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent implements OnInit {
  listLangage: Question[] = [];
  displayedColumns: string[] = ['question', 'reponse', 'UPDATE/DELETE'];
  dataSource = new MatTableDataSource<Question>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private domainService: DomainHttpService,
    public dialog: MatDialog,
    private router: Router,
    private langageServiceHttp: LangageServiceHttp
  ) {}

  ngOnInit() {
    console.log(this.domainService.id);
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.question.toLowerCase().includes(filter) || data.question.toLowerCase().includes(filter);
    };
    this.langageServiceHttp.getQuestions(this.domainService.id).subscribe((res: any) => {
      this.listLangage = res;
      console.log(this.listLangage);
      this.dataSource.data = this.listLangage;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  add() {
    const dialogRef = this.dialog.open(PopUpAddQuestionComponent, {
      height: '750px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  delete(id) {
    console.log(id);
    const dialogRef = this.dialog.open(PopUpDeleteConfirmComponent, {
      height: '200px',
      width: '600px',
      data: { id: id, service: 'QuizQuestionComponent' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  edit(id, name) {
    let result = this.listLangage.filter((obj) => {
      return obj.id === id;
    });

    const dialogRefEdit = this.dialog.open(PopUpEditQuestionComponent, {
      height: '750px',
      width: '800px',
      data: { result: result },
    });

    dialogRefEdit.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }
  toQuestions(id) {
    this.domainService.id = id;
    this.router.navigate(['/list-question']);
  }
}
