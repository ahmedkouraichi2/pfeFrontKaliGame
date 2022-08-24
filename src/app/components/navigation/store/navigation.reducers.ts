import { Action, createReducer, on } from '@ngrx/store';

import { navigationInitialState, NavigationState } from '@app/components/navigation/store/navigation.state';
import * as NavigationAction from '@app/components/navigation/store/navigation.actions';

const reducer = createReducer(
  navigationInitialState,
  on(NavigationAction.navigate, (state, { path }) => ({
    ...state,
    path,
  })),

  on(NavigationAction.navigateSuccess, (state) => ({
    ...state,
  })),

  on(NavigationAction.navigateFail, () => navigationInitialState)
);

export function navigationReducer(state: NavigationState | undefined, action: Action) {
  return reducer(state, action);
}
