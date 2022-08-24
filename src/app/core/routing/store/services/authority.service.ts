import { Injectable } from '@angular/core';
import * as AuthenticationStates from '@app/core/authentication/store/auth.state';
import { EnumUserRole } from '@app/core/authentication/store/model/user-role.enum';
import { AuthenticationService } from '@app/core/authentication/store/services/authentication.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

@Injectable()
export class AuthorityService {
  constructor(
    private store: Store<AuthenticationStates.AuthenticationState>,
    private authService: AuthenticationService
  ) {}

  canReadDashboard(): Observable<boolean> {
    return this.store
      .select(AuthenticationStates.selectRoles)
      .pipe(
        map((roles) => {
          if (roles === null || roles.length === 0) {
            roles = this.authService.getUserRoles();
          }
          return roles.includes(EnumUserRole.CAN_READ_DASHBOARD);
        }),
        first()
      )
      .pipe(filter((v) => v !== null && v !== undefined));
  }
}
