import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserInterface } from '../interfaces/user.interface';
import { UserRequestInterface } from '../interfaces/user-request.interface';
import { DISABLE_HTTP_LOADER } from '../interceptors/disable-http-loader.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getMe() {
    return this.http
      .get<UserInterface>(
        `${environment.userBaseUri}/${environment.userService}/users/me`,
        {
          context: new HttpContext().set(DISABLE_HTTP_LOADER, true),
        }
      )
      .pipe(take(1));
  }

  updateMe(user: UserRequestInterface) {
    return this.http
      .put<UserInterface>(
        `${environment.userBaseUri}/${environment.userService}/users/me`,
        user
      )
      .pipe(take(1));
  }
}
