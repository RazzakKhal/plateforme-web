import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Formula } from '../../student/student/formula/models/formula.model';
import * as FormulaSelectors from '../../student/student/formula/store/formula.selectors';
import * as FormulaActions from '../../student/student/formula/store/formula.actions';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminFacadeService {
  private readonly store = inject(Store);

  readonly formulas$: Observable<Formula[] | undefined> = this.store
    .select(FormulaSelectors.getAllFormulas)
    .pipe(filter(Boolean));

  getAllFormulas() {
    this.store.dispatch(FormulaActions.getAllFormulas());
  }
}
