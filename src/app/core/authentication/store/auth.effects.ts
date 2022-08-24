import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from '@app/core/authentication/store/auth.actions';
import { catchError, map, mergeMap, filter } from 'rxjs/operators';
import { AuthenticationService } from '@app/core/authentication/store/services/authentication.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  logIn$ = createEffect(() => this.actions$.pipe(ofType(AuthActionTypes.LOGIN)), { dispatch: false });

  logOut$ = createEffect(() =>
    this.actions$.pipe(filter((v) => v !== null && v !== undefined)).pipe(
      ofType(AuthActionTypes.LOGOUT),
      mergeMap(() =>
        this.authenticationService.logout().pipe(
          map(() => ({ type: AuthActionTypes.LOGOUT_DONE })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
