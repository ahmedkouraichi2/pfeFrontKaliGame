import { errorInitialState, ErrorState } from '@app/components/error/store/error.state';
import * as ErrorAction from '@app/components/error/store/error.actions';
import { createReducer, on, Action } from '@ngrx/store';

const reducer = createReducer(
  errorInitialState,
  on(ErrorAction.sendError, (state, { errorMessage }) => ({
    ...state,
    message: errorMessage,
  }))
);

export function errorReducer(state: ErrorState | undefined, action: Action) {
  return reducer(state, action);
}
