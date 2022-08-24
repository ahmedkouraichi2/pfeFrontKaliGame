import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentLeave {
  CanLeave: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(
    component: CanComponentLeave,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.CanLeave) {
      return component.CanLeave();
    }

    return true;
  }
}
