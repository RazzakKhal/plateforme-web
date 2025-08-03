import { HttpInterceptorFn } from '@angular/common/http';
import { Inject, inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

export const tokenExpirationInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const authToken = localStorageService.getToken();


  if (!authToken) {
    return next(req);
  }

  if(tokenService.isTokenExpired(authToken)){
    localStorageService.clearToken()
    router.navigate(['/sign-in'])
    return EMPTY;
  }
  return next(req);
};
