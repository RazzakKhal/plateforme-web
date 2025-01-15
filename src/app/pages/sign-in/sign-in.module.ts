import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./sign-in.routes";

@NgModule({
    declarations:[SignInComponent],
    imports:[RouterModule.forChild(ROUTES)],
    providers:[],
    exports:[],
})
export class SignInModule{

}