import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { PaymentFormDto } from '../interfaces/payment-form.interface';
import { Uuid } from '../types/uuid.type';

@Injectable({
  providedIn: 'root',
})
export class MoneticoService {
  constructor(private http: HttpClient) {
  }

  initierPaiement(formulaId: Uuid): Observable<PaymentFormDto> {
    return this.http.post<PaymentFormDto>(
      `${environment.userBaseUri}/${environment.paymentService}/payments`,
      {},
      {
        params: {formulaId},
      }
    );
  }
}
