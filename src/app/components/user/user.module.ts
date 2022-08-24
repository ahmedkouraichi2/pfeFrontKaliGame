import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
 import { UserComponent } from '@app/components/user/component/user.component';
import { UsersServiceHttp } from './store/services/user.service.http';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule,],
  providers: [UsersServiceHttp],
})
export class UserModule { }
