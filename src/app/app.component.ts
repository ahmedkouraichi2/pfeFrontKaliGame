import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/authentication/store/services/authentication.service';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _scavenger = new Scavenger(this);

  authenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.authenticate().catch((err) => console.log(err));
  }

  ngOnInit(): void {
    this.authenticationService
      .isLogIn()
      .pipe(this._scavenger.collectByKey('[App] isLogIn'))
      .subscribe((logIn) => (this.authenticated = logIn));
  }

  ngOnDestroy() {}
}
