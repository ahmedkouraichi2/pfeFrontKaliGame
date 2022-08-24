import { createFeatureSelector, createSelector } from '@ngrx/store';

export const navigationFeatureKey = 'navigationState';

export interface NavigationState {
  path: string;
}

export const navigationInitialState: NavigationState = {
  path: '',
};

export const selectNavigationState = createFeatureSelector<NavigationState>(navigationFeatureKey);
export const selectPath = createSelector(selectNavigationState, (state: NavigationState) => state.path);
