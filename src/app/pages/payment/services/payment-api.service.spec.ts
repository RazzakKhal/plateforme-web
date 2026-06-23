import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { PaymentApiService } from './payment-api.service';
import { environment } from '../../../../environments/environment';
import { DISABLE_HTTP_LOADER } from '../../../shared/interceptors/disable-http-loader.token';

describe('PaymentApiService', () => {
  let service: PaymentApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PaymentApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request the payment details by reference', () => {
    const reference = 'payment-ref-123';

    service.getPaymentByReference(reference).subscribe();

    const request = httpTestingController.expectOne(
      `${environment.userBaseUri}/${environment.paymentService}/payments/${reference}`
    );

    expect(request.request.method).toBe('GET');

    request.flush({
      reference,
      status: 'PENDING',
      userId: 'user-id',
      formulaId: 'formula-id',
    });
  });

  it('should disable the global loader when requested', () => {
    const reference = 'payment-ref-123';

    service.getPaymentByReference(reference, true).subscribe();

    const request = httpTestingController.expectOne(
      `${environment.userBaseUri}/${environment.paymentService}/payments/${reference}`
    );

    expect(request.request.context.get(DISABLE_HTTP_LOADER)).toBeTrue();

    request.flush({
      reference,
      status: 'PENDING',
      userId: 'user-id',
      formulaId: 'formula-id',
    });
  });
});
