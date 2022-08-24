import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env/environment';

import { metaReducers, ROOT_REDUCERS } from '@app/core/store/root.reducer';
// import { AuthorityService } from '@app/core/routing/store/services/authority.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthorityService } from '@app/core/routing/store/services/authority.service';

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  declarations: [],
  providers: [AuthorityService],
})
export class RootStoreModule {}
