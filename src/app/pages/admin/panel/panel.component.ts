import { Component, inject, OnInit } from '@angular/core';
import { AdminFacadeService } from '../facade/admin-facade.service';
import { Formula } from '../../student/student/formula/models/formula.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { Uuid } from '../../../shared/types/uuid.type';

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
  formulaDeleting: Formula | undefined;
  formulaAdding: boolean = false;

  isFormSubmitted = false;

  constructor() {
    this.formulaForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl([]),
      price: new FormControl('', [Validators.required]),
      promotionnalPrice: new FormControl(''),
      code: new FormControl(true, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.facade.getAllFormulas();
  }

  addFormula() {
    this.formulaAdding = true;
    this.formulaForm.get('title')?.setValue('');
    this.formulaForm.get('price')?.setValue('');
    this.formulaForm.get('promotionnalPrice')?.setValue('');
    this.formulaForm.get('code')?.setValue(true);
    this.formulaForm.get('description')?.setValue([]);
  }

  selectEditFormula(formula: Formula) {
    this.formulaForm.get('title')?.setValue(formula.title);
    this.formulaForm.get('price')?.setValue(formula.price);
    this.formulaForm
      .get('promotionnalPrice')
      ?.setValue(formula.promotionnalPrice);
    this.formulaForm.get('code')?.setValue(formula.code);
    this.formulaForm
      .get('description')
      ?.setValue(formula.description?.split(',') ?? []);
    this.facade.selectFormulaToEdit(formula);
  }

  selectEditUser(user: UserInterface) {
    this.facade.selectUserToEdit(user);
  }

  deleteFormula(id?: Uuid) {
    if (!id) {
      return;
    }

    this.facade.deleteFormula(id);
    this.formulaDeleting = undefined;
  }

  onCloseFormulaPopup() {
    this.facade.selectFormulaToEdit(null);
    this.formulaDeleting = undefined;
    this.formulaAdding = false;
    this.isFormSubmitted = false;
  }

  onSaveFormulaPopup(seletedFormula?: Formula) {
    this.isFormSubmitted = true;
    if (this.formulaForm.valid) {
      const formula: Formula = {
        title: this.formulaForm.get('title')?.value,
        price: this.formulaForm.get('price')?.value,
        description: this.formulaForm
          .get('description')
          ?.value?.join(',')
          .trim(),
        promotionnalPrice: this.formulaForm.get('promotionnalPrice')?.value,
        code: this.formulaForm.get('code')?.value,
        id: seletedFormula?.id,
      } as Formula;
      seletedFormula
        ? this.facade.updateFormula(formula)
        : this.facade.createFormula(formula);

      this.onCloseFormulaPopup();
    }
  }

  onCloseUserPopup() {
    this.facade.selectUserToEdit(null);
  }

  openDeletingPopup(formula: Formula) {
    this.formulaDeleting = formula;
  }
}
