import { createAction, props } from '@ngrx/store';
import * as Keycloak from 'keycloak-js';
import { EnumUserRole } from '@app/core/authentication/store/model/user-role.enum';

export enum AuthActionTypes {
  LOGIN = '[AUTH] Login',
  LOGOUT = '[AUTH] Logout',
  LOGOUT_DONE = '[AUTH] Logout done',
}

export const authenticated = createAction(
  AuthActionTypes.LOGIN,
  props<{ authInstance: Keycloak.KeycloakInstance; token: string; roles: EnumUserRole[] }>()
);
export const logOut = createAction(AuthActionTypes.LOGOUT);
export const logOutDone = createAction(AuthActionTypes.LOGOUT_DONE);
