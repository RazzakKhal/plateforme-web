import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./sign-up.routes";

@NgModule({
    declarations:[SignUpComponent],
    imports:[RouterModule.forChild(ROUTES)],
    providers:[],
    exports:[],
})
export class SignUpModule{

}