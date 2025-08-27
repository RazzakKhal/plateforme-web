import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Formula } from '../models/formula.model';
import { environment } from '../../../../../../environments/environment';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormulaApiService {
  private readonly http = inject(HttpClient);

  getAllFormulas() {
    return this.http
      .get<Formula[]>(
        `${environment.userBaseUri}/${environment.formulaService}/formulas`
      )
      .pipe(
        tap((formules) => console.info('appel des formules : ' + formules)),
        take(1)
      );
  }

  getFormula(id: number) {
    return this.http
      .get<Formula>(
        `${environment.userBaseUri}/${environment.formulaService}/formulas/${id}`
      )
      .pipe(
        tap((formule) =>
          console.info('appel de la formule du user : ' + formule)
        ),
        take(1)
      );
  }
}
