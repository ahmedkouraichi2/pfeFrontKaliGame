import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/components/dashboard/component/dashboard.component';
import { UserComponent } from '@app/components/user/component/user.component';
import { UnSavedChangesGuard } from '@app/core/routing/store/services/unsaved-changes-guard.service';
import { AuthGuardService } from '@app/core/routing/store/services/auth-guard.service';
import { ErrorComponent } from '@app/components/error/component/error.component';

import {
  DASHBOARD_REDIRECT_PATH,
  EMAIL_REDIRECT_PATH,
  USER_REDIRECT_PATH,
} from '@app/core/routing/store/model/routing.constants';
import { QuestionComponent } from '@app/components/question/component/question.component';
import { EmailComponent } from '@app/components/email/component/email.component';
import { QuestionListComponent } from '@app/components/question-list/component/question-list.component';
import { QuizQuestionComponent } from '@app/components/question-list/component/quiz-question/quiz-question.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'email',
    pathMatch: 'full',
  },
  {
    path: DASHBOARD_REDIRECT_PATH,
    canActivate: [AuthGuardService],
    component: DashboardComponent,
    canDeactivate: [UnSavedChangesGuard],
  },

  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'list-domain',
    component: QuestionListComponent,
  },
  {
    path: 'list-question',
    component: QuizQuestionComponent,
  },

  // {
  //   path: 'dashboard/:id',
  //   canActivate: [AuthGuardService],
  //   component: DashboardComponent,
  //   canDeactivate: [UnSavedChangesGuard],
  // },
  {
    path: 'test',
    component: QuestionComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuardService, UnSavedChangesGuard],
})
export class KaligameRoutingModule {}
