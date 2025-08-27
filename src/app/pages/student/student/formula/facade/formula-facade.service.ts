import { inject, Injectable } from '@angular/core';
import * as FormulaActions from '../store/formula.actions';
import { Store } from '@ngrx/store';
import * as FormulaSelectors from '../store/formula.selectors';
import { filter, Observable, tap } from 'rxjs';
import { Formula } from '../models/formula.model';
import { UserInterface } from '../../../../../shared/interfaces/user.interface';
import { getMe } from '../../../../../store/users/selectors/me.selector';
import { FormulaDomainService } from '../services/formula-domain.service';

@Injectable({
  providedIn: 'root',
})
export class FormulaFacadeService {
  private readonly store = inject(Store);
  private readonly domain = inject(FormulaDomainService);

  readonly formulas$: Observable<Formula[] | undefined> = this.store
    .select(FormulaSelectors.getAllFormulas)
    .pipe(filter(Boolean));

  readonly userFormula$: Observable<Formula | undefined> = this.store
    .select(FormulaSelectors.getUserFormula)
    .pipe(filter(Boolean));

  readonly user$: Observable<UserInterface> = this.store
    .select(getMe)
    .pipe(filter(Boolean));

  // readonly allFormulasError$ = this.store.select(
  //   FormulaSelectors.getError
  // );
  // readonly formulaError$ = this.store.select(ResetPasswordSelectors.getError);

  init(): void {
    this.user$
      .pipe(
        tap((user: UserInterface) => {
          if (user.formulaId) {
            this.store.dispatch(
              FormulaActions.getFormula({ formulaId: user.formulaId })
            );
          } else {
            this.store.dispatch(FormulaActions.getAllFormulas());
          }
        })
      )
      .subscribe();
  }

  payer(formula: Formula) {
    this.domain.payer(formula);
  }

  clearError() {
    // this.store.dispatch(FormulaActions.resetPasswordClearError());
  }

  clearSuccess() {
    // this.store.dispatch(FormulaActions.resetPasswordClearSuccess());
  }
}
