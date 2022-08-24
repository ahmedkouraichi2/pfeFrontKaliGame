import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';

@Component({
  selector: 'app-pop-up-add',
  templateUrl: './pop-up-add.component.html',
  styleUrls: ['./pop-up-add.component.scss'],
})
export class PopUpAddComponent implements OnInit {
  name: string;
  constructor(private langageServiceHttp: LangageServiceHttp, public dialogRef: MatDialogRef<PopUpAddComponent>) {}

  ngOnInit(): void {}
  save() {
    console.log(this.name);
    let langage = new Langage(null, this.name);
    console.log(langage);
    this.langageServiceHttp.addDomaine(langage).subscribe((res: any) => {
      console.log(res);
      this.onNoClick();
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
