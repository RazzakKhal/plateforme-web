import { Component, inject, OnInit } from '@angular/core';
import { AdminFacadeService } from '../facade/admin-facade.service';
import { Formula } from '../../student/student/formula/models/formula.model';
import { User } from '../../../shared/models/user.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent implements OnInit {
  private readonly facade = inject(AdminFacadeService);

  displayChoice: 'FORMULA' | 'USER' = 'FORMULA';
  allFormulas$ = this.facade.formulas$;
  selectedUser$ = this.facade.selectedUser$;
  selectedFormula$ = this.facade.selectedFormula$;

  formulaForm: FormGroup;

  constructor() {
    this.formulaForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      promotionnalPrice: new FormControl(''),
      code: new FormControl(true, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.facade.getAllFormulas();
  }

  selectEditFormula(formula: Formula) {
    this.formulaForm.get('title')?.setValue(formula.title);
    this.formulaForm.get('price')?.setValue(formula.price);
    this.formulaForm
      .get('promotionnalPrice')
      ?.setValue(formula.promotionnalPrice);
    this.formulaForm.get('code')?.setValue(formula.code);

    this.facade.selectFormulaToEdit(formula);
  }

  selectEditUser(user: User) {
    this.facade.selectUserToEdit(user);
  }

  deleteFormula(id: number) {
    this.facade.deleteFormula(id);
  }

  onCloseFormulaPopup() {
    this.facade.selectFormulaToEdit(null);
  }

  onSaveFormulaPopup(seletedFormula: Formula) {
    if (this.formulaForm.valid) {
      const formula: Formula = {
        title: this.formulaForm.get('title')?.value,
        price: this.formulaForm.get('price')?.value,
        promotionnalPrice: this.formulaForm.get('promotionnalPrice')?.value,
        code: this.formulaForm.get('code')?.value,
        id: seletedFormula?.id,
      } as Formula;

      seletedFormula.id
        ? this.facade.updateFormula(formula)
        : this.facade.createFormula(formula);
    }
  }

  onCloseUserPopup() {
    this.facade.selectUserToEdit(null);
  }
}
