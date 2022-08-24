import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as RouteConst from '@app/core/routing/store/model/routing.constants';
import { ActiveLinks } from '@app/components/navigation/store/model/activeLinks';
import { NavigationServiceMetier } from '@app/components/navigation/store/services/navigation.service.metier';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Authorities } from '@app/components/navigation/store/model/authorities';
import { AuthorityService } from '@app/core/routing/store/services/authority.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  private _scavenger = new Scavenger(this);
  fullDisplay = true;

  readonly LINK_USERS = RouteConst.USER_REDIRECT_PATH;
  readonly LINK_DASHBOARD = RouteConst.DASHBOARD_REDIRECT_PATH;
  readonly LINK_EMAIL = RouteConst.EMAIL_REDIRECT_PATH;
  readonly LINK_QUESTION_LIST = RouteConst.QUESTION_LIST;

  activeLinks: ActiveLinks;
  authorities: Authorities = new Authorities();

  subMenuDashboard: boolean = false;
  subMenuUser: boolean = false;
  isDash: boolean;

  constructor(
    private router: Router,
    private navigationService: NavigationServiceMetier,
    private authorityService: AuthorityService
  ) {
    this.authorities.canReadDashboard$ = this.authorityService.canReadDashboard();
  }

  ngOnInit(): void {
    this.isDash = this.router.url.includes('dashboard');
    this.navigationService
      .getActiveLinks()
      .pipe(this._scavenger.collectByKey('[Nav] getActiveLinks'))
      .subscribe((path) => {
        const currentPath = path;
        this.activeLinks = {
          activeMyDashboard: currentPath.startsWith(RouteConst.DASHBOARD_URI),
          activeMyUser: currentPath.startsWith(RouteConst.USER_URI),
          // activeMyEmail: currentPath.startsWith(RouteConst.EMAIL_URI),
        };

        if (this.activeLinks.activeMyDashboard) {
          this.subMenuDashboard = true;
        }
        if (this.activeLinks.activeMyUser) {
          this.subMenuUser;
        }
      });
  }

  changeDisplay() {
    this.fullDisplay = !this.fullDisplay;
  }

  closeSubMenu() {
    this.subMenuDashboard = false;
    this.subMenuUser = false;
  }

  ngOnDestroy() {}

  goto(path: string) {
    path = `/${path}`;
    this.router.navigate([path]);
  }
}
