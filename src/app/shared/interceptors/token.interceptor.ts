import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(LocalStorageService).getToken();
  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('Authorization', 'Bearer ' + authToken),
  });
  return next(newReq);
};
