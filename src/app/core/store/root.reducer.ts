import { State } from '@app/core/store/root.state';
import { environment } from '@env/environment';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const ROOT_REDUCERS: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
