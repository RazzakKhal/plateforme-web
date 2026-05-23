import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordApiService {
  private readonly http = inject(HttpClient);

  sendMail(mail: string) {
    return this.http
      .post<void>(
        `${environment.userBaseUri}/${environment.userService}/auth/forgot-password`,
        { mail }
      )
      .pipe(take(1));
  }
}
