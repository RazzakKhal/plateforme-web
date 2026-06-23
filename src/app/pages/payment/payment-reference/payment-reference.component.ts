import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Observable, catchError, map, of, switchMap, throwError, timer } from 'rxjs';
import {
  PaymentDetails,
  PaymentStatus,
} from '../models/payment-details.interface';
import { PaymentApiService } from '../services/payment-api.service';

const POLLING_DELAYS_IN_MS = [1000, 1000, 2000, 3000, 5000];

@Component({
  selector: 'app-payment-reference',
  standalone: false,
  templateUrl: './payment-reference.component.html',
  styleUrl: './payment-reference.component.css',
})
export class PaymentReferenceComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly paymentApiService = inject(PaymentApiService);
  private readonly router = inject(Router);

  reference = '';
  currentStatus?: string;
  pollAttempt = 0;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('reference')),
        switchMap((reference) => {
          if (!reference) {
            return throwError(() => new Error('Missing payment reference.'));
          }

          this.reference = reference;
          return this.pollPaymentUntilResolved(reference);
        }),
        catchError(() => {
          this.navigateToError(this.currentStatus);
          return EMPTY;
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((payment) => this.navigateFromStatus(this.normalizeStatus(payment.status)));
  }

  private pollPaymentUntilResolved(
    reference: string,
    attemptIndex = 0
  ): Observable<PaymentDetails> {
    return this.paymentApiService.getPaymentByReference(reference, true).pipe(
      switchMap((payment) => {
        const normalizedStatus = this.normalizeStatus(payment.status);
        this.currentStatus = normalizedStatus;

        if (normalizedStatus === 'COMPLETED' || this.isErrorStatus(normalizedStatus)) {
          return of(payment);
        }

        if (!this.isShortPollStatus(normalizedStatus) || attemptIndex >= POLLING_DELAYS_IN_MS.length) {
          return throwError(
            () => new Error(`Payment did not reach a terminal state. Latest status: ${normalizedStatus}`)
          );
        }

        this.pollAttempt = attemptIndex + 1;

        return timer(POLLING_DELAYS_IN_MS[attemptIndex]).pipe(
          switchMap(() => this.pollPaymentUntilResolved(reference, attemptIndex + 1))
        );
      })
    );
  }

  private isErrorStatus(status: PaymentStatus | string): boolean {
    return status === 'FAILED' || status === 'INVALID_SIGNATURE';
  }

  private isShortPollStatus(status: PaymentStatus | string): boolean {
    return status === 'PENDING' || status === 'SUCCESS';
  }

  private navigateFromStatus(status: PaymentStatus | string): void {
    if (status === 'COMPLETED') {
      void this.router.navigate(['../success'], { relativeTo: this.activatedRoute });
      return;
    }

    this.navigateToError(status);
  }

  private navigateToError(status?: PaymentStatus | string): void {
    void this.router.navigate(['../error'], {
      relativeTo: this.activatedRoute,
      queryParams: status ? { status } : undefined,
    });
  }

  private normalizeStatus(status?: string): PaymentStatus | string {
    return (status ?? '').toUpperCase();
  }
}
