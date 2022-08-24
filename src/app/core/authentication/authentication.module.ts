import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { authReducer } from '@app/core/authentication/store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@app/core/authentication/store/auth.effects';
import { AuthenticationService } from '@app/core/authentication/store/services/authentication.service';
import { TokenInterceptor } from '@app/core/authentication/store/services/token.interceptor';
import { authenticationFeatureKey } from '@app/core/authentication/store/auth.state';

@NgModule({
  imports: [StoreModule.forFeature(authenticationFeatureKey, authReducer), EffectsModule.forFeature([AuthEffects])],
  declarations: [],
  exports: [],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AuthenticationModule {}
