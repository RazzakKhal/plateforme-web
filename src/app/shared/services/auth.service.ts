import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';

import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getMe() {
    return this.http
      .get<UserInterface>(
        `${environment.userBaseUri}/${environment.userService}/users/me`
      )
      .pipe(take(1));
  }

  sendForgotPasswordMail(mail: string) {
    return this.http
      .post<UserInterface>(
        `${environment.userBaseUri}/${environment.userService}/auth/forgot-password`,
        { mail }
      )
      .pipe(take(1));
  }
}
