import { Component, OnInit, OnDestroy } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { logOut } from '@app/core/authentication/store/auth.actions';
import { Store } from '@ngrx/store';
import { RootState } from '@app/core/store/root.state';
import { MAP_BREADCRUMB_BY_PATH } from '@app/core/routing/store/model/routing.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _scavenger = new Scavenger(this);

  currentPath = '';

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store
      .select((state) => state.router)
      .pipe(this._scavenger.collect())
      .subscribe((routerState) => {
        this.currentPath = MAP_BREADCRUMB_BY_PATH.get(routerState.state.url);
      });
  }

  ngOnDestroy() {}

  logout() {
    this.store.dispatch(logOut());
  }
}
