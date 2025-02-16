import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./sign-in.routes";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations:[SignInComponent],
    imports:[RouterModule.forChild(ROUTES), MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
    providers:[],
    exports:[],
})
export class SignInModule{

}