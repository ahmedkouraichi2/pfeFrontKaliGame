import { Component, OnInit, OnDestroy } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Router } from '@angular/router';
import { DASHBOARD_REDIRECT_PATH } from '@app/core/routing/store/model/routing.constants';
import { RootState } from '@app/core/store/root.state';
import { Store } from '@ngrx/store';
import { selectErrorState } from '@app/components/error/store/error.state';
import { MESSAGE_ERROR_404 } from '@app/components/error/store/model/error.constant';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  private _scavenger = new Scavenger(this);

  errorMessage: string;

  constructor(private router: Router, private store: Store<RootState>) {}

  ngOnInit() {
    this.store
      .select(selectErrorState)
      .pipe(this._scavenger.collect())
      .subscribe((state) => {
        this.errorMessage = state.message;
        if (this.errorMessage === null) {
          this.errorMessage = MESSAGE_ERROR_404;
        }
      });
  }

  ngOnDestroy() {}

  backHome() {
    this.router.navigate([DASHBOARD_REDIRECT_PATH]).catch((err) => console.log(err));
  }
}
