import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FailedPaymentComponent } from './failed-payment/failed-payment.component';
import { PaymentReferenceComponent } from './payment-reference/payment-reference.component';
import { ROUTES } from './payment.routes';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';

@NgModule({
    declarations:[SuccessPaymentComponent, FailedPaymentComponent, PaymentReferenceComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)],
    providers:[],
    exports:[],
})
export class PaymentModule{

}
