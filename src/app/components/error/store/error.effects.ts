import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { ErrorActionTypes } from '@app/components/error/store/error.actions';
import { tap } from 'rxjs/operators';
import { ERROR_REDIRECT_PATH } from '@app/core/routing/store/model/routing.constants';

@Injectable()
export class ErrorEffects {
  constructor(private actions$: Actions, private router: Router) {}

  sendError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ErrorActionTypes.ERROR_SEND),
        tap(() => {
          this.router.navigate([ERROR_REDIRECT_PATH]).catch((err) => console.log(err));
        })
      ),
    { dispatch: false }
  );
}
