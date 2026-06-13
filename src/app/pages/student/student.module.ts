import { NgModule } from "@angular/core";
import { StudentComponent } from "./student/student.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./student.routes";
import { CommonModule } from "@angular/common";
import { FormulaComponent } from "./student/formula/formula.component";
import { ProfilComponent } from "./student/profil/profil.component";
import { DesignSystemModule } from "../../shared/components/design-system.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[StudentComponent, ProfilComponent],
    imports:[RouterModule.forChild(ROUTES), CommonModule, DesignSystemModule, ReactiveFormsModule],
    providers:[],
    exports:[]
})
export class StudentModule{

}
