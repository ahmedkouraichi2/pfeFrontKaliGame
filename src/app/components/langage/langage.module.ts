import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LangageServiceHttp } from './store/service/langage.service';
import { LangageComponent } from './component/langage/langage.component';

@NgModule({
  declarations: [LangageComponent],
  imports: [CommonModule],
  providers: [LangageServiceHttp],
})
export class LangageModule {}
