import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { errorReducer } from '@app/components/error/store/error.reducer';
import { ErrorEffects } from '@app/components/error/store/error.effects';
import { ErrorComponent } from '@app/components/error/component/error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '@app/components/error/error.interceptor';
import { errorFeatureKey } from '@app/components/error/store/error.state';

@NgModule({
  imports: [StoreModule.forFeature(errorFeatureKey, errorReducer), EffectsModule.forFeature([ErrorEffects])],
  declarations: [ErrorComponent],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class ErrorModule {}
