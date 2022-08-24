import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationState } from '@app/core/authentication/store/auth.state';
import { NavigationState } from '@app/components/navigation/store/navigation.state';
import { ErrorState } from '@app/components/error/store/error.state';

export const routerFeatureKey = 'routerState';

export interface State {
  router: fromRouter.RouterReducerState;
}

export interface RootState extends State {
  authenticationState: AuthenticationState;
  navigationState: NavigationState;
  errorState: ErrorState;
}

export const selectRouterState = createFeatureSelector<RootState>(routerFeatureKey);
export const selectUrl = createSelector(selectRouterState, (state: RootState) => state.router.state.url);
