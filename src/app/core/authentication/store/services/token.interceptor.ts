import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication/store/services/authentication.service';
import { Scavenger } from '@wishtack/rx-scavenger';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnDestroy {
  private _scavenger = new Scavenger(this);

  keycloakInstance: any = null;
  accessToken: string = '';

  refreshTokenInProgress = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService
      .getKeycloakInstance()
      .pipe(this._scavenger.collectByKey('getKeycloakInstance'))
      .subscribe((Keycloak) => {
        this.keycloakInstance = Keycloak;
      });
    this.authenticationService
      .getToken()
      .pipe(this._scavenger.collectByKey('getToken'))
      .subscribe((token) => {
        this.accessToken = token;
        this.refreshTokenSubject.next(true);
      });
  }

  ngOnDestroy(): void {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.refreshTokenInProgress = this.isRefreshTokenInProgress();

    if (this.refreshTokenInProgress) {
      return this.refreshTokenSubject.pipe(
        this._scavenger.collectByKey('refreshTokenSubject'),
        filter((result) => result !== null),
        take(1),
        switchMap(() => next.handle(this.addAuthenticationToken(req)))
      );
    } else {
      this.refreshTokenSubject.next(null);
      return next.handle(this.addAuthenticationToken(req));
    }
  }

  addAuthenticationToken(request: HttpRequest<any>) {
    let newRequest = !!this.accessToken
      ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
      : request;

    return newRequest;
  }

  isRefreshTokenInProgress(): boolean {
    if (this.keycloakInstance?.isTokenExpired()) {
      this.refreshTokenSubject.next(null);
      this.authenticationService.resfreshToken();
      return true;
    }
    return false;
  }
}
