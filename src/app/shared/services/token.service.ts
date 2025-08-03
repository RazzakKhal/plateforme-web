import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../interfaces/token.interface';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isTokenExpired(token: string) {
    const decoded : JwtPayload = jwtDecode(token);
    const now = Date.now()
    return decoded.exp * 1000 < Date.now();
  }
}
