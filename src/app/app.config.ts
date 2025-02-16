import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { usersReducer } from './store/users/reducer/users.reducer';
import { provideHttpClient } from '@angular/common/http';
import { SignUpEffect } from './store/users/effects/sign-up-effect';
import { SignInEffect } from './store/users/effects/sign-in.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(), 
    provideStore({
    meState : usersReducer,
    }), 
    provideEffects([SignUpEffect, SignInEffect]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideRouterStore(),
    provideHttpClient()
  ]
};
