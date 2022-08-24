import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenDialogComponent } from '@app/components/dashboard/component/open-dialog/open-dialog.component';
import { DashboardServiceHttp } from '@app/components/dashboard/store/services/dashboard.service.http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dash: string = '';
  date1 = new Date();

  @ViewChild('candidat') nameKey!: ElementRef;
  id: number;
  constructor(
    private dashboardServiceHttp: DashboardServiceHttp,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dashboardServiceHttp.setId(this.id);
    this.getDateExpiration();
  }

  submit() {
    // this.router.navigate(['/question']);
    this.router.navigate(['/test']);
  }
  startQuiz() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
  openDialog() {
    const dialogRef = this.dialog.open(OpenDialogComponent, {
      height: '100%',
      width: '100%',
      disableClose: true,
      panelClass: 'full-screen-modal',
    });
  }

  getDateExpiration() {
    this.dashboardServiceHttp.getDateExpiration(this.id).subscribe((res) => {
      console.log(res);
      let date2 = this.datepipe.transform(this.date1, 'yyyy-MM-ddThh:mm:ss');
      console.log(date2);
      if (date2 >= res) {
        this.openDialog();
      }
    });
  }
}
