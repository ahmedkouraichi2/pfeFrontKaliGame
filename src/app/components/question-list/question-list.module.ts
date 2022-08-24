import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuestionHttpService } from '@app/components/question/store/services/question.service.http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DomainHttpService } from '@app/components/question-list/store/services/domain.service.http';
import { PopUpAddComponent } from './component/pop-up-add/pop-up-add.component';
import { MatInputModule } from '@angular/material/input';
import { PopUpEditComponent } from './component/pop-up-edit/pop-up-edit.component';
import { PopUpDeleteConfirmComponent } from './component/pop-up-delete-confirm/pop-up-delete-confirm.component';
import { QuizQuestionComponent } from './component/quiz-question/quiz-question.component';
import { MatRadioModule } from '@angular/material/radio';
import { PopUpAddQuestionComponent } from './component/pop-up-add-question/pop-up-add-question.component';
import { PopUpEditQuestionComponent } from './component/pop-up-edit-question/pop-up-edit-question.component';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRadioModule,
  ],
  declarations: [],
  exports: [],
  entryComponents: [
    PopUpAddComponent,
    PopUpEditComponent,
    PopUpDeleteConfirmComponent,
    PopUpAddQuestionComponent,
    PopUpEditQuestionComponent,
  ],
  providers: [DomainHttpService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class QuestionListModule {}
