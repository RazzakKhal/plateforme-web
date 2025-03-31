import { NgModule } from "@angular/core";
import { StudentComponent } from "./student/student.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./student.routes";

@NgModule({
    declarations:[StudentComponent],
    imports:[RouterModule.forChild(ROUTES)],
    providers:[],
    exports:[]
})
export class StudentModule{

}