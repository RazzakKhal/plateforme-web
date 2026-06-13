import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Formula } from '../../student/student/formula/models/formula.model';
import * as FormulaSelectors from '../../student/student/formula/store/formula.selectors';
import * as FormulaActions from '../../student/student/formula/store/formula.actions';
import { filter, Observable, Subject } from 'rxjs';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { Uuid } from '../../../shared/types/uuid.type';

@Injectable({
  providedIn: 'root',
})
export class AdminFacadeService {
  private readonly store = inject(Store);
  private editFormulaSubject = new Subject<Formula | null>();
  private editUserSubject = new Subject<UserInterface | null>();

  readonly selectedFormula$ = this.editFormulaSubject.asObservable();
  readonly selectedUser$ = this.editUserSubject.asObservable();

  readonly formulas$: Observable<Formula[] | undefined> = this.store
    .select(FormulaSelectors.getAllFormulas)
    .pipe(filter(Boolean));

  selectFormulaToEdit(formula: Formula | null): void {
    this.editFormulaSubject.next(formula);
  }

  selectUserToEdit(user: UserInterface | null) {
    this.editUserSubject.next(user);
  }

  getAllFormulas() {
    this.store.dispatch(FormulaActions.getAllFormulas());
  }

  deleteFormula(id?: Uuid) {
    if (!id) {
      return;
    }

    this.store.dispatch(FormulaActions.deleteFormula({ formulaId: id }));
  }

  createFormula(formula: Formula) {
    this.store.dispatch(FormulaActions.addFormula({ formula }));
  }

  updateFormula(formula: Formula) {
    this.store.dispatch(FormulaActions.editFormula({ formula: formula }));
  }
}
