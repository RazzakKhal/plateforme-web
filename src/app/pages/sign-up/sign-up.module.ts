import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./sign-up.routes";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { PInputComponent } from "../../shared/components/atoms/p-input/p-input.component";
import { DesignSystemModule } from "../../shared/components/design-system.module";

@NgModule({
    declarations:[SignUpComponent, SignUpFormComponent],
    imports:[RouterModule.forChild(ROUTES), MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, DesignSystemModule],
    providers:[],
    exports:[],
})
export class SignUpModule{

}