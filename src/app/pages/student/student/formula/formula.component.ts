import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../../../store/global-state.interface';
import { getMe } from '../../../../store/users/selectors/me.selector';
import { filter, mergeMap, tap } from 'rxjs';
import { UserInterface } from '../../../../shared/interfaces/user.interface';
import { getFormulaAction } from '../../../../store/formulas/actions/get-formula';
import { getAllFormulasAction } from '../../../../store/formulas/actions/get-all-formulas';
import { getMeAction } from '../../../../store/users/actions/get-me.action';
import { Formula } from '../../../../shared/interfaces/formula.interface';
import { getAllFormulas } from '../../../../store/formulas/selectors/all-formulas.selector';
import { getUserFormula } from '../../../../store/formulas/selectors/formula.selector';

@Component({
  selector: 'app-formula',
  imports: [],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.css'
})
export class FormulaComponent implements OnInit{

  formula : Formula | undefined;
  allFormulas : Formula[] | undefined;

  constructor(private store: Store<GlobalState>){

  }



  ngOnInit(): void {
    this.getFormulas()
    this.store.select(getAllFormulas).subscribe((formulas : Formula[] | undefined) => this.allFormulas = formulas)
    this.store.select(getUserFormula).subscribe((formula : Formula | undefined) => this.formula = formula)

  }

  // aller chercher l'utilisateur dans le store, si y'a pas aller le cherche dans user-service
  // regarder la propriété formula du user, si undefined requeter getAllFormulas, sinon récupérer la formule

  getFormulas(){
      this.store.select(getMe).pipe(
        filter(Boolean),
        tap((user : UserInterface) =>  user.formula ? this.store.dispatch(getFormulaAction({formulaId : user.formula})) : this.store.dispatch(getAllFormulasAction()))
      ).subscribe()
   
  }

}
