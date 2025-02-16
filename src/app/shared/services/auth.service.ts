import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { User } from '../../models/user.models';
import { environment } from '../../../environment/environment';
import { LoginForm } from '../../models/login-form.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private user$ = new Subject<User>()

  getMe(){
    return this.user$;
  }

  signUp(user : User){
    console.log('on est ici')
    return this.http.post<User>(`${environment.userBaseUri}/users/signup`, user);
  }

  signIn(user: LoginForm){
    return this.http.post<User>(`${environment.userBaseUri}/users/signin`, user).pipe
    (
      tap(() => console.log('le loginform', user))
    );
  }


}
