import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { usersReducer } from './store/users/reducer/users.reducer';
import { UserEffect } from './store/users/effects/user-effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(), 
    provideStore({
    usersState : usersReducer
    }), 
    provideEffects([UserEffect]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideRouterStore()]
};
