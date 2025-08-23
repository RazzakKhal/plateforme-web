import { FailedPaymentComponent } from "./failed-payment/failed-payment.component";
import { SuccessPaymentComponent } from "./success-payment/success-payment.component";

export const ROUTES = [
    {path: 'success', component : SuccessPaymentComponent},
    {path: 'failed', component : FailedPaymentComponent}
]