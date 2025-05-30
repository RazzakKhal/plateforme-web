import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';
import { Formula } from '../interfaces/formula.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http : HttpClient) { }

  getAllFormulas(){
       return this.http.get<Formula[]>(`${environment.userBaseUri}/${environment.formulaService}/formulas`).pipe(
            tap((formules) => console.log('appel des formules : ' + formules)),
            take(1)
          );
  }
}
