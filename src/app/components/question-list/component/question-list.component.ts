import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmailComponent } from '@app/components/email/component/email.component';
import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';
import { PopUpAddComponent } from '@app/components/question-list/component/pop-up-add/pop-up-add.component';
import { PopUpDeleteConfirmComponent } from '@app/components/question-list/component/pop-up-delete-confirm/pop-up-delete-confirm.component';
import { PopUpEditComponent } from '@app/components/question-list/component/pop-up-edit/pop-up-edit.component';
import { DomainHttpService } from '@app/components/question-list/store/services/domain.service.http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  listLangage: Langage[] = [];
  displayedColumns: string[] = ['name', 'UPDATE/DELETE'];
  dataSource = new MatTableDataSource<Langage>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private domainService: DomainHttpService,
    public dialog: MatDialog,
    private router: Router,
    private langageServiceHttp: LangageServiceHttp
  ) {}

  ngOnInit() {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.name.toLowerCase().includes(filter);
    };
    this.domainService.getLangages().subscribe((res: any) => {
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
    const dialogRef = this.dialog.open(PopUpAddComponent, {
      height: '450px',
      width: '500px',
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
      data: { id: id, service: 'QuestionListComponent' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
      this.ngAfterViewInit();
    });
  }

  edit(id, name) {
    let langage = new Langage(id, name);
    console.log(langage);
    const dialogRefEdit = this.dialog.open(PopUpEditComponent, {
      height: '450px',
      width: '500px',
      data: { lg: langage },
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
