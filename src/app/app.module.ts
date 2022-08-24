import { AppComponent } from '@app/app.component';
import { KaligameRoutingModule } from '@app/core/routing/routing.module';
import { AuthenticationModule } from '@app/core/authentication/authentication.module';
import { QuestionModule } from '@app/components/question/question.module';
import { QuestionListModule } from '@app/components/question-list/question-list.module';
import { UserModule } from '@app/components/user/user.module';
import { NavigationModule } from '@app/components/navigation/navigation.module';
import { ErrorModule } from '@app/components/error/error.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from '@app/core/store/root.store.module';
import { ShareModule } from '@app/core/store/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './components/question/component/question.component';
import { QuestionListComponent } from './components/question-list/component/question-list.component';
import { ChangeBgDirective } from './components/directive/change-bg.directive';

import { FormsModule } from '@angular/forms';
import { EmailServiceHttp } from './components/email/store/services/email.service.http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmailModule } from './components/email/email.module';

import { LangageModule } from './components/langage/langage.module';
import { MatSliderModule } from '@angular/material';
import { EmailComponent } from '@app/components/email/component/email.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { PopUpAddComponent } from '@app/components/question-list/component/pop-up-add/pop-up-add.component';
import { PopUpDeleteConfirmComponent } from '@app/components/question-list/component/pop-up-delete-confirm/pop-up-delete-confirm.component';
import { PopUpEditComponent } from '@app/components/question-list/component/pop-up-edit/pop-up-edit.component';
import { QuizQuestionComponent } from '@app/components/question-list/component/quiz-question/quiz-question.component';
import { MatRadioModule } from '@angular/material/radio';
import { PopUpAddQuestionComponent } from '@app/components/question-list/component/pop-up-add-question/pop-up-add-question.component';
import { PopUpEditQuestionComponent } from '@app/components/question-list/component/pop-up-edit-question/pop-up-edit-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    ChangeBgDirective,
    PopUpAddComponent,
    PopUpEditComponent,
    PopUpDeleteConfirmComponent,
    PopUpAddQuestionComponent,
    PopUpEditQuestionComponent,
    QuizQuestionComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    LangageModule,
    EmailModule,
    MatRadioModule,
    QuestionModule,
    QuestionListModule,
    MatTableModule,
    FormsModule,
    ShareModule,
    MatButtonModule,
    MatButtonToggleModule,
    ErrorModule,
    HttpClientModule,
    KaligameRoutingModule,
    NavigationModule,
    UserModule,
    MatSliderModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    AuthenticationModule,
    RootStoreModule,
  ],
  entryComponents: [PopUpAddComponent, PopUpEditComponent, PopUpDeleteConfirmComponent],
  providers: [EmailServiceHttp],
  bootstrap: [AppComponent],
})
export class AppModule {}
