import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PaymentDetails } from '../models/payment-details.interface';
import { DISABLE_HTTP_LOADER } from '../../../shared/interceptors/disable-http-loader.token';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {
  private readonly http = inject(HttpClient);

  getPaymentByReference(reference: string, disableGlobalLoader = false): Observable<PaymentDetails> {
    return this.http.get<PaymentDetails>(
      `${environment.userBaseUri}/${environment.paymentService}/payments/${reference}`,
      {
        context: new HttpContext().set(DISABLE_HTTP_LOADER, disableGlobalLoader),
      }
    );
  }
}
