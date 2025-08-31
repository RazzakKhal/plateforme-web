import { Component, inject, OnInit } from '@angular/core';
import { AdminFacadeService } from '../facade/admin-facade.service';
import { Formula } from '../../student/student/formula/models/formula.model';
import { User } from '../../../shared/models/user.models';

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

  ngOnInit(): void {
    this.facade.getAllFormulas();
  }

  selectEditFormula(formula: Formula) {
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

  onCloseUserPopup() {
    this.facade.selectUserToEdit(null);
  }
}
