import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationActionTypes } from '@app/components/navigation/store/navigation.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, mergeMap } from 'rxjs/operators';

@Injectable()
export class NavigationEffects {
  constructor(private actions$: Actions, private router: Router) {}

  navigate$ = createEffect(() =>
    this.actions$.pipe(filter((v) => v !== null && v !== undefined)).pipe(
      ofType(NavigationActionTypes.NAVIGATION_START),
      mergeMap((action: any) =>
        this.router
          .navigate([action.path])
          .then(() => ({ type: NavigationActionTypes.NAVIGATION_SUCCESS }))
          .catch(() => ({ type: NavigationActionTypes.NAVIGATION_FAIL }))
      )
    )
  );
}
