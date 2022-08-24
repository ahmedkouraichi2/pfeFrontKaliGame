import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from '@app/components/email/store/model/details';
import { EmailServiceHttp } from '@app/components/email/store/services/email.service.http';
import { Langage } from '@app/components/langage/store/model/langage';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  details = new Details();
  langages: Langage[] = [];
  listLangage: Langage[] = [];
  title = 'EmailTemplate';
  quarterList: Array<any> = [];

  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    enableCheckAll: false,
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: false,
  };
  constructor(private emailService: EmailServiceHttp, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.listLangages();
  }

  selectedQuarterList: any[] = [];
  onItemSelect(event: any, checked) {
    const value = this.quarterList.filter((x) => this.selectedQuarterList.indexOf(x) >= 0);
    let first = this.quarterList.findIndex((x) => x == value[0]);
    let last = this.quarterList.findIndex((x) => x == value[value.length - 1]);
    if (last - first + 1 > value.length && !checked) {
    }

    for (let i = 0; i < this.selectedQuarterList.length; i++) {
      this.listLangage = this.listLangage.concat({
        id: this.selectedQuarterList[i].item_id,
        name: this.selectedQuarterList[i].item_text,
      });
      this.details.langages = this.listLangage;
    }

    this.listLangage = [];
  }

  onSubmit() {
    this.emailService.addDetails(this.details).subscribe((res: any) => {
      this.details = res;
      console.log(this.details);
      alert('Email Sent successfully');
      this.details.name = '';
      this.details.prenom = '';
      this.details.email = '';
      this.details.langages = [];
    });
  }

  listLangages() {
    this.emailService.getLangages().subscribe((res: any) => {
      console.log(res);

      for (let i = 0; i < res.length; i++) {
        this.quarterList = this.quarterList.concat({ item_id: res[i].id, item_text: res[i].name });
      }
    });
  }
}
