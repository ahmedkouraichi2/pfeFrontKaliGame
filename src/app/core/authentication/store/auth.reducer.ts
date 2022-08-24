import * as AuthAction from '@app/core/authentication/store/auth.actions';
import { authenticationInitialState, AuthenticationState } from '@app/core/authentication/store/auth.state';

import { Action, createReducer, on } from '@ngrx/store';

const reducer = createReducer(
  authenticationInitialState,
  on(AuthAction.authenticated, (state, { authInstance, token, roles }) => {
    return { ...state, authInstance, logIn: true, userToken: token, userRoles: roles };
  }),
  on(AuthAction.logOut, (state) => ({ ...state })),
  on(AuthAction.logOutDone, () => authenticationInitialState)
);

export function authReducer(state: AuthenticationState | undefined, action: Action) {
  return reducer(state, action);
}
