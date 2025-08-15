import { NgModule } from "@angular/core";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ROUTES } from "./forgot-password.routes";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DesignSystemModule } from "../../shared/components/design-system.module";
import { ForgotFormComponent } from "./forgot-password/forgot-form/forgot-form.component";

@NgModule({
    declarations:[ForgotPasswordComponent, ForgotFormComponent ],
    imports: [RouterModule.forChild(ROUTES), ReactiveFormsModule, DesignSystemModule],
    providers:[],
    exports:[],
})
export class ForgotPasswordModule{

}