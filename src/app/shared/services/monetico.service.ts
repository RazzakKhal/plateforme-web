import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MoneticoService {

  constructor(private http: HttpClient) { }

  initierPaiement(id : number): Observable<any> {
    return this.http.post(`${environment.userBaseUri}/${environment.paymentService}/api/payment/initier`, {} ,
  {
    params: { id }
  });
  }
}
