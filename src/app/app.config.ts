import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { usersReducer } from './store/users/reducer/users.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SignUpEffect } from './store/users/effects/sign-up-effect';
import { SignInEffect } from './store/users/effects/sign-in.effect';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';
import { MeEffect } from './store/users/effects/me.effect';
import { formulaReducer } from './store/formulas/reducer/formulas.reducer';
import { AllFormulasEffect } from './store/formulas/effects/all-formulas.effect';
import { FormulaEffect } from './store/formulas/effects/formula.effect';
import { tokenExpirationInterceptor } from './shared/interceptors/token-expiration.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(), 
    provideStore({
    meState : usersReducer,
    formulaState : formulaReducer
    }), 
    provideEffects([SignUpEffect, SignInEffect, MeEffect, AllFormulasEffect,FormulaEffect]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideRouterStore(),
    provideHttpClient(
      withInterceptors([tokenExpirationInterceptor, tokenInterceptor])
    )
  ]
};
