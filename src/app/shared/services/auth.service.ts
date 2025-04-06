import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take, tap } from 'rxjs';
import { User } from '../../models/user.models';
import { environment } from '../../../environment/environment';
import { LoginForm } from '../../models/login-form.models';
import { SignInResponse } from '../../models/signInResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private user$ = new Subject<User>()

  getMe() {
    return this.http.get<User>(`${environment.userBaseUri}/${environment.userService}/users/me`).pipe(
      take(1)
    );
  }

  signUp(user: User) {
    return this.http.post<SignInResponse>(`${environment.userBaseUri}/${environment.userService}/users/signup`, user).pipe(
      take(1)
    );
  }

  signIn(user: LoginForm) {
    return this.http.post<SignInResponse>(`${environment.userBaseUri}/${environment.userService}/users/signin`, user).pipe
      (
        take(1)
      );
  }


}
