import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PaymentDetails } from '../models/payment-details.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {
  private readonly http = inject(HttpClient);

  getPaymentByReference(reference: string): Observable<PaymentDetails> {
    return this.http.get<PaymentDetails>(
      `${environment.userBaseUri}/${environment.paymentService}/payments/${reference}`
    );
  }
}
