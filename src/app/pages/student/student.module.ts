import { NgModule } from "@angular/core";
import { StudentComponent } from "./student/student.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./student.routes";
import { CommonModule } from "@angular/common";
import { FormulaComponent } from "./student/formula/formula.component";
import { ProfilComponent } from "./student/profil/profil.component";

@NgModule({
    declarations:[StudentComponent, ProfilComponent],
    imports:[RouterModule.forChild(ROUTES), CommonModule],
    providers:[],
    exports:[]
})
export class StudentModule{

}