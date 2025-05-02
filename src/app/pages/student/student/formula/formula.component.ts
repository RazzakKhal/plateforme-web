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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formula',
  imports: [CommonModule],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.css'
})
export class FormulaComponent implements OnInit{

  formula : Formula | undefined;
  allFormulas : Formula[] | undefined;
  withCode = false;

  constructor(private store: Store<GlobalState>){

  }



  ngOnInit(): void {
    this.store.select(getAllFormulas).pipe(
      filter(Boolean)
    ).subscribe((formulas : Formula[] | undefined) => {this.allFormulas = formulas; console.log('toutes les formules ont ete recup : ' + JSON.stringify(this.allFormulas))})
    this.store.select(getUserFormula).pipe(
      filter(Boolean)
    ).subscribe((formula : Formula | undefined) => this.formula = formula)
    this.getFormulas()
    
  }

  // aller chercher l'utilisateur dans le store, si y'a pas aller le cherche dans user-service
  // regarder la propriété formula du user, si undefined requeter getAllFormulas, sinon récupérer la formule

  getFormulas(){
      this.store.select(getMe).pipe(
        filter(Boolean),
        tap((user) => console.log('lutilisateur : ' + JSON.stringify(user))),
        tap((user : UserInterface) =>  user.formulaId ? this.store.dispatch(getFormulaAction({formulaId : user.formulaId})) : this.store.dispatch(getAllFormulasAction()))
      ).subscribe()
   
  }

  splitDescription(description: string){
    return description.split(",");
  }

  toggleCode(){
    this.withCode = !this.withCode;
    console.log("withcode " + this.withCode)
  }
  

}
