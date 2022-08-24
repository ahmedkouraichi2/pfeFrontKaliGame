import { createAction, props } from '@ngrx/store';

export enum NavigationActionTypes {
  NAVIGATION_START = '[NAVIGATION] Start',
  NAVIGATION_SUCCESS = '[NAVIGATION] Success',
  NAVIGATION_FAIL = '[NAVIGATION] Fail',
}

export const navigate = createAction(NavigationActionTypes.NAVIGATION_START, props<{ path: string }>());

export const navigateSuccess = createAction(NavigationActionTypes.NAVIGATION_SUCCESS);

export const navigateFail = createAction(NavigationActionTypes.NAVIGATION_FAIL);
