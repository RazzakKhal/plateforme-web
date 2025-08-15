import { RouterModule } from "@angular/router";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DesignSystemModule } from "../../shared/components/design-system.module";
import { NgModule } from "@angular/core";
import { ROUTES } from "./reset-password.routes";
import { ResetFormComponent } from "./reset-password/reset-form/reset-form.component";

@NgModule({
    declarations:[ResetPasswordComponent, ResetFormComponent],
    imports: [RouterModule.forChild(ROUTES), ReactiveFormsModule, DesignSystemModule],
    providers:[],
    exports:[],
})
export class ResetPasswordModule{

}