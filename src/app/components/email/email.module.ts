import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { EmailComponent } from '@app/components/email/component/email.component';
import { EmailServiceHttp } from '@app/components/email/store/services/email.service.http';
import { HeaderModule } from '@app/components/header/header.module';
import { ShareModule } from '@app/core/store/share.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [EmailComponent],
  imports: [
    FormsModule,
    ShareModule,
    HeaderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [EmailServiceHttp],
  bootstrap: [EmailComponent],
  exports: [EmailComponent],
})
export class EmailModule {}
