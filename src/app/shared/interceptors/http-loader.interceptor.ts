import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpLoaderService } from '../services/http-loader.service';

export const httpLoaderInterceptor: HttpInterceptorFn = (req, next) => {
  const httpLoaderService = inject(HttpLoaderService);

  httpLoaderService.show();

  return next(req).pipe(
    finalize(() => {
      httpLoaderService.hide();
    })
  );
};
