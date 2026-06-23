import { Routes } from '@angular/router';
import { FailedPaymentComponent } from './failed-payment/failed-payment.component';
import { PaymentReferenceComponent } from './payment-reference/payment-reference.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';

export const ROUTES: Routes = [
  { path: 'success', component: SuccessPaymentComponent },
  { path: 'error', component: FailedPaymentComponent },
  { path: 'failed', redirectTo: 'error', pathMatch: 'full' },
  { path: ':reference', component: PaymentReferenceComponent },
];
