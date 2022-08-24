import { Injectable, OnDestroy } from '@angular/core';

import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import * as AuthenticateStates from '@app/core/authentication/store/auth.state';
import * as AuthenticateActions from '@app/core/authentication/store/auth.actions';
import { refreshTokenErrorMsg } from '@app/components/error/store/model/error.constant';
import * as Keycloak from 'keycloak-js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnumUserRole } from '@app/core/authentication/store/model/user-role.enum';
import { Scavenger } from '@wishtack/rx-scavenger';
import { RootState } from '@app/core/store/root.state';
import { sendError } from '@app/components/error/store/error.actions';

@Injectable()
export class AuthenticationService implements OnDestroy {
  private _scavenger = new Scavenger(this);
  constructor(private store: Store<AuthenticateStates.AuthenticationState>, private rootStore: Store<RootState>) {}

  ngOnDestroy(): void {}

  authenticate(): Promise<any> {
    return new Promise<any>(() => {
      const keycloakAuth: any = Keycloak({
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      });
      const keycloakPromise$: Promise<any> = keycloakAuth.init({ onLoad: 'login-required', promiseType: 'native' });
      keycloakPromise$.then(() => {
        const tokenParsed = keycloakAuth.tokenParsed;
        const enumUserRoles: EnumUserRole[] = [];
        if (tokenParsed) {
          tokenParsed.realm_access.roles.forEach((role: string) => enumUserRoles.push(EnumUserRole[role]));
        }
        this.setUserRoles(enumUserRoles);
        this.store.dispatch(
          AuthenticateActions.authenticated({
            authInstance: keycloakAuth,
            roles: enumUserRoles,
            token: keycloakAuth.token,
          })
        );
      });
    });
  }

  getToken(): Observable<string> {
    return this.store.select(AuthenticateStates.selectToken);
  }

  logout(): Observable<any> {
    localStorage.clear();
    return this.store.select(AuthenticateStates.selectKeycloak).pipe(
      map((keycloak) => {
        keycloak.logout({ redirectUri: document.baseURI });
      })
    );
  }

  isLogIn(): Observable<boolean> {
    return this.store.select(AuthenticateStates.selectLogIn).pipe(map((logIn) => logIn));
  }

  getUserRoles(): EnumUserRole[] {
    return JSON.parse(localStorage.getItem('roles'));
  }

  setUserRoles(roles: EnumUserRole[]): void {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  getKeycloakInstance() {
    return this.store.select(AuthenticateStates.selectKeycloak);
  }

  resfreshToken() {
    this.getKeycloakInstance()
      .pipe(this._scavenger.collectByKey('getKeycloakInstance'))
      .subscribe((keycloak) => {
        const expired = keycloak.isTokenExpired();
        if (expired) {
          keycloak.updateToken(10).then((refreshed) => {
            if (refreshed) {
              const tokenParsed = keycloak.tokenParsed;
              const enumUserRoles: EnumUserRole[] = [];
              if (tokenParsed) {
                tokenParsed.realm_access.roles.forEach((role: string) => enumUserRoles.push(EnumUserRole[role]));
              }
              this.store.dispatch(
                AuthenticateActions.authenticated({
                  authInstance: keycloak,
                  roles: enumUserRoles,
                  token: keycloak.token,
                })
              );
            } else {
              this.rootStore.dispatch(sendError({ errorMessage: refreshTokenErrorMsg }));
            }
          });
        }
      });
  }
}
