import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-pop-up-edit',
  templateUrl: './pop-up-edit.component.html',
  styleUrls: ['./pop-up-edit.component.scss'],
})
export class PopUpEditComponent implements OnInit {
  constructor(
    private langageServiceHttp: LangageServiceHttp,
    public dialogRef: MatDialogRef<PopUpEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  edit() {
    this.langageServiceHttp.editDomaine(this.data.lg).subscribe((res: any) => {
      console.log(res);
      this.onNoClick();
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
