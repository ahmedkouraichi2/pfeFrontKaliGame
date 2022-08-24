import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router } from '@angular/router';
import { DASHBOARD_REDIRECT_PATH, ERROR_REDIRECT_PATH } from '@app/core/routing/store/model/routing.constants';
import { AuthorityService } from '@app/core/routing/store/services/authority.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanLoad {
  constructor(public authorityService: AuthorityService, public router: Router) {}

  canLoad(route: Route): Observable<boolean> {
    const url: string = route.path;
    let result$: Observable<boolean>;
    switch (url) {
      case DASHBOARD_REDIRECT_PATH:
        result$ = this.authorityService.canReadDashboard();
        break;

      default:
        result$ = of(false);
    }
    return result$.pipe(
      map((canLoad: boolean) => {
        if (!canLoad) {
          this.router.navigate([ERROR_REDIRECT_PATH]).catch((err) => console.log(err));
          return false;
        }
        return true;
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const url: string = route.routeConfig.path;
    let result$: Observable<boolean>;
    switch (url) {
      case DASHBOARD_REDIRECT_PATH:
        result$ = this.authorityService.canReadDashboard();
        break;

      default:
        result$ = of(false);
    }
    return result$.pipe(
      map((canLoad: boolean) => {
        if (!canLoad) {
          this.router.navigate([ERROR_REDIRECT_PATH]).catch((err) => console.log(err));
          return false;
        }
        return true;
      })
    );
  }
}
