import { inject, Injectable } from '@angular/core';
import { LoginForm } from '../../../shared/models/login-form.models';
import { SignInResponse } from '../models/signInResponse.interface';
import { environment } from '../../../../environments/environment';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignInApiService {
  private readonly http = inject(HttpClient);

  signIn(user: LoginForm) {
    return this.http
      .post<SignInResponse>(
        `${environment.userBaseUri}/${environment.userService}/auth/signin`,
        user
      )
      .pipe(take(1));
  }
}
