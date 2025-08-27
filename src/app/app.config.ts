import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { usersReducer } from './store/users/reducer/users.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';
import { MeEffect } from './store/users/effects/me.effect';
import { tokenExpirationInterceptor } from './shared/interceptors/token-expiration.interceptor';
import { ResetPasswordEffect } from './pages/reset-password/store/reset-password.effects';
import { SignInEffect } from './pages/sign-in/store/sign-in.effects';
import { signInReducer } from './pages/sign-in/store/sign-in.reducer';
import { SignUpEffect } from './pages/sign-up/store/sign-up.effects';
import { signUpReducer } from './pages/sign-up/store/sign-up.reducer';
import { resetPasswordReducer } from './pages/reset-password/store/reset-password.reducer';
import { forgotPasswordReducer } from './pages/forgot-password/store/forgot-password.reducer';
import { ForgotPasswordEffect } from './pages/forgot-password/store/forgot-password.effects';
import { formulaReducer } from './pages/student/student/formula/store/formula.reducer';
import { FormulaEffect } from './pages/student/student/formula/store/formula.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({
      meState: usersReducer,
      formulaState: formulaReducer,
      signInState: signInReducer,
      signUpState: signUpReducer,
      resetPasswordState: resetPasswordReducer,
      forgotPasswordState: forgotPasswordReducer,
    }),
    provideEffects([
      SignUpEffect,
      SignInEffect,
      MeEffect,
      FormulaEffect,
      ResetPasswordEffect,
      ForgotPasswordEffect,
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore(),
    provideHttpClient(
      withInterceptors([tokenExpirationInterceptor, tokenInterceptor])
    ),
  ],
};
