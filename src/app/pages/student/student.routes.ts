import { FormulaComponent } from "./student/formula/formula.component";
import { LessonsComponent } from "./student/lessons/lessons.component";
import { SkillsComponent } from "./student/skills/skills.component";
import { StudentComponent } from "./student/student.component";

export const ROUTES = [
    {
        path: '', 
        component : StudentComponent
    },
    {
      path: 'formules',
      component: FormulaComponent
    },
    {
      path: 'lecons',
      component: LessonsComponent
    },
    {
      path: 'competences',
      component: SkillsComponent
    }
]

