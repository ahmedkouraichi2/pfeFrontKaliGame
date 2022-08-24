import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';

@Component({
  selector: 'app-pop-up-delete-confirm',
  templateUrl: './pop-up-delete-confirm.component.html',
  styleUrls: ['./pop-up-delete-confirm.component.scss'],
})
export class PopUpDeleteConfirmComponent implements OnInit {
  constructor(
    private langageServiceHttp: LangageServiceHttp,
    public dialogRef: MatDialogRef<PopUpDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  delete() {
    if (this.data.service === 'QuestionListComponent') {
      this.langageServiceHttp.deleteDomaine(this.data.id).subscribe((res: any) => {
        console.log(res);
        this.onNoClick();
      });
    } else {
      this.langageServiceHttp.deleteQuestion(this.data.id).subscribe((res: any) => {
        console.log(res);
        this.onNoClick();
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
