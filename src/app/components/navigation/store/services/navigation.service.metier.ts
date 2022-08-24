import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, forkJoin } from 'rxjs';
import { filter } from 'rxjs/operators';

import { State } from '@app/core/store/root.state';
import * as MyNavigationActions from '@app/components/navigation/store/navigation.actions';
import { NavigationState } from '@app/components/navigation/store/navigation.state';

@Injectable()
export class NavigationServiceMetier {
  constructor(
    private store: Store<NavigationState>,
    private RouterStore: Store<State> //private collaboratorsServiceMetier: CollaboratorsServiceMetier, //private myInfosServiceMetier: MyInfosServiceMetier
  ) {}

  navigateTo(path: string) {
    this.store.dispatch(MyNavigationActions.navigate({ path }));
  }

  // navigateToDetail(refCollaborator: string) {
  //   this.collaboratorsServiceMetier.goEditCollaborator(refCollaborator, true);
  // }

  getActiveLinks(): Observable<string> {
    return this.RouterStore.select((state) => state.router.state.url).pipe(
      filter((v) => v !== null && v !== undefined)
    );
  }

  // getRefCollaborator(): Observable<string> {
  //   return this.myInfosServiceMetier.getUserRef();
  // }
}
