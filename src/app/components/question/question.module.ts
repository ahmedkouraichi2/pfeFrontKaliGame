import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionHttpService } from '@app/components/question/store/services/question.service.http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [],
  exports: [],
  providers: [QuestionHttpService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class QuestionModule {}
