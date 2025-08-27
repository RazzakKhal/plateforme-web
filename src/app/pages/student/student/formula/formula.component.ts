import { Component, inject, OnInit } from '@angular/core';
import { Formula } from './models/formula.model';
import { CommonModule } from '@angular/common';
import { ListFormulaComponent } from './list-formula/list-formula.component';
import { MoneticoService } from '../../../../shared/services/monetico.service';
import { ChosenFormulaComponent } from './chosen-formula/chosen-formula.component';
import { FormulaFacadeService } from './facade/formula-facade.service';

@Component({
  selector: 'app-formula',
  imports: [CommonModule, ListFormulaComponent, ChosenFormulaComponent],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.css',
})
export class FormulaComponent implements OnInit {
  formula: Formula | undefined;
  allFormulas: Formula[] | undefined;
  withCode = false;

  private readonly facade = inject(FormulaFacadeService);

  allFormulas$ = this.facade.formulas$;
  formula$ = this.facade.userFormula$;

  ngOnInit(): void {
    this.facade.init();
  }

  toggleCode(rep: boolean) {
    this.withCode = rep;
  }

  payer(formula: Formula): void {
    this.facade.payer(formula);
  }
}
