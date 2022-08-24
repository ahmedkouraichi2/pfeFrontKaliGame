import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavigationComponent } from '@app/components/navigation/component/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EffectsModule } from '@ngrx/effects';
import { MatListModule } from '@angular/material/list';
import { NavigationEffects } from '@app/components/navigation/store/navigation.effects';
import { NavigationServiceMetier } from '@app/components/navigation/store/services/navigation.service.metier';
import { StoreModule } from '@ngrx/store';
import { navigationReducer } from '@app/components/navigation/store/navigation.reducers';
import { navigationFeatureKey } from '@app/components/navigation/store/navigation.state';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@app/components/header/header.module';

@NgModule({
  imports: [
    MatSidenavModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    HeaderModule,
    StoreModule.forFeature(navigationFeatureKey, navigationReducer),
    EffectsModule.forFeature([NavigationEffects]),
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  providers: [NavigationServiceMetier],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NavigationModule {}
