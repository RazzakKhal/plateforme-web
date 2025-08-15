import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ResetPasswordDto } from '../models/reset-password.dto';
import { Observable } from 'rxjs';
import { TokenDto } from '../models/token.dto';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordApiService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.userBaseUri}/${environment.userService}`;

  public resetPassword(resetPasswordDto : ResetPasswordDto){return this.http.post<TokenDto>(`${this.baseUrl}/auth/reset-password`, resetPasswordDto)}
}
