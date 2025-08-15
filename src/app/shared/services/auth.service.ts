import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginForm } from '../models/login-form.models';
import { SignInResponse } from '../interfaces/signInResponse.interface';
import { UserInterface } from '../interfaces/user.interface';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getMe() {
    return this.http.get<UserInterface>(`${environment.userBaseUri}/${environment.userService}/users/me`).pipe(
      take(1)
    );
  }

  signUp(user: User) {
    return this.http.post<SignInResponse>(`${environment.userBaseUri}/${environment.userService}/auth/signup`, user).pipe(
      take(1)
    );
  }

  signIn(user: LoginForm) {
    return this.http.post<SignInResponse>(`${environment.userBaseUri}/${environment.userService}/auth/signin`, user).pipe
      (
        take(1)
      );
  }

  sendForgotPasswordMail(mail: string) {
   
    return this.http.post<UserInterface>(`${environment.userBaseUri}/${environment.userService}/auth/forgot-password`, {mail}).pipe(
      take(1)
    );
  }


}
