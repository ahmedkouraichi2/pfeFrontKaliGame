import { createFeatureSelector, createSelector } from '@ngrx/store';

export const errorFeatureKey = 'errorState';

export interface ErrorState {
  message: null;
}

export const errorInitialState: ErrorState = {
  message: null,
};

export const selectErrorState = createFeatureSelector<ErrorState>(errorFeatureKey);
export const selectMessage = createSelector(selectErrorState, (state: ErrorState) => state.message);
