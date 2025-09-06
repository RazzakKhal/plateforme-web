import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Formula } from '../../../student/student/formula/models/formula.model';

@Component({
  selector: 'app-edit-formula-form',
  standalone: false,
  templateUrl: './edit-formula-form.component.html',
  styleUrl: './edit-formula-form.component.css',
})
export class EditFormulaFormComponent {
  @Input() formula!: Formula;
  @Input() formulaForm!: FormGroup;

  isFormSubmitted = false;
}
