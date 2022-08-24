import { EnumUserRole } from '@app/core/authentication/store/model/user-role.enum';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const authenticationFeatureKey = 'authenticationState';

export interface AuthenticationState {
  authInstance: any;
  userToken: string | null;
  userRoles: EnumUserRole[];
  logIn: boolean;
}

export const authenticationInitialState: AuthenticationState = {
  authInstance: null,
  userToken: null,
  userRoles: [],
  logIn: false,
};

export const selectAuthenticationState = createFeatureSelector<AuthenticationState>(authenticationFeatureKey);
export const selectRoles = createSelector(selectAuthenticationState, (state: AuthenticationState) => state.userRoles);
export const selectLogIn = createSelector(selectAuthenticationState, (state: AuthenticationState) => state.logIn);
export const selectToken = createSelector(selectAuthenticationState, (state: AuthenticationState) => state.userToken);
export const selectKeycloak = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state.authInstance
);
