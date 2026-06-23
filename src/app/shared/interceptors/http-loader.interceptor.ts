import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpLoaderService } from '../services/http-loader.service';
import { DISABLE_HTTP_LOADER } from './disable-http-loader.token';

export const httpLoaderInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(DISABLE_HTTP_LOADER)) {
    return next(req);
  }

  const httpLoaderService = inject(HttpLoaderService);

  httpLoaderService.show();

  return next(req).pipe(
    finalize(() => {
      httpLoaderService.hide();
    })
  );
};
