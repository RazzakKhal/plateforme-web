import { RouterModule } from "@angular/router";
import { FailedPaymentComponent } from "./failed-payment/failed-payment.component";
import { SuccessPaymentComponent } from "./success-payment/success-payment.component";
import { ROUTES } from "./payment.routes";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[SuccessPaymentComponent, FailedPaymentComponent],
    imports: [RouterModule.forChild(ROUTES)],
    providers:[],
    exports:[],
})
export class PaymentModule{

}