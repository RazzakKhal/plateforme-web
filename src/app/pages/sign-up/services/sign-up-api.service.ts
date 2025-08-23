import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SignUpResponse } from '../models/sign-up-response.dto';
import { take } from 'rxjs';
import { User } from '../../../shared/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class SignUpApiService {
  private readonly http = inject(HttpClient);

  signUp(user: User) {
    return this.http
      .post<SignUpResponse>(
        `${environment.userBaseUri}/${environment.userService}/auth/signup`,
        user
      )
      .pipe(take(1));
  }
}
