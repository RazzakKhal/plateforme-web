import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Formula } from '../models/formula.model';
import { environment } from '../../../../../../environments/environment';
import { take, tap } from 'rxjs';
import { PageResponse } from '../../../../../shared/interfaces/page.interface';

@Injectable({
  providedIn: 'root',
})
export class FormulaApiService {
  private readonly http = inject(HttpClient);

  getAllFormulas() {
    return this.http
      .get<
        PageResponse<Formula>
      >(`${environment.userBaseUri}/${environment.formulaService}/formulas`)
      .pipe(take(1));
  }

  getFormula(id: number) {
    return this.http
      .get<Formula>(
        `${environment.userBaseUri}/${environment.formulaService}/formulas/${id}`,
      )
      .pipe(
        tap((formule) =>
          console.info('appel de la formule du user : ' + formule),
        ),
        take(1),
      );
  }

  deleteFormula(id: number) {
    return this.http
      .delete(
        `${environment.userBaseUri}/${environment.formulaService}/formulas/${id}`,
      )
      .pipe(take(1));
  }

  updateFormula(formula: Formula) {
    return this.http
      .put<Formula>(
        `${environment.userBaseUri}/${environment.formulaService}/formulas/${formula.id}`,
        formula,
      )
      .pipe(take(1));
  }

  addFormula(formula: Formula) {
    return this.http
      .post<Formula>(
        `${environment.userBaseUri}/${environment.formulaService}/formulas`,
        formula,
      )
      .pipe(take(1));
  }
}
