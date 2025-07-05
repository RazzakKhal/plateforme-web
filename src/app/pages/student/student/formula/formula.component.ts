import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../../../store/global-state.interface';
import { getMe } from '../../../../store/users/selectors/me.selector';
import { filter, tap } from 'rxjs';
import { UserInterface } from '../../../../shared/interfaces/user.interface';
import { getAllFormulasAction } from '../../../../store/formulas/actions/get-all-formulas';
import { Formula } from '../../../../shared/interfaces/formula.interface';
import { getAllFormulas } from '../../../../store/formulas/selectors/all-formulas.selector';
import { getUserFormula } from '../../../../store/formulas/selectors/formula.selector';
import { CommonModule } from '@angular/common';
import { ListFormulaComponent } from './list-formula/list-formula.component';
import { MoneticoService } from '../../../../shared/services/monetico.service';

@Component({
  selector: 'app-formula',
  imports: [CommonModule, ListFormulaComponent],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.css'
})
export class FormulaComponent implements OnInit{

  formula : Formula | undefined;
  allFormulas : Formula[] | undefined;
  withCode = false;



  private moneticoService = inject(MoneticoService)

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
        tap((user : UserInterface) =>  this.store.dispatch(getAllFormulasAction()))
      ).subscribe()
   
  }



  toggleCode(){
    this.withCode = !this.withCode;
    console.log("withcode " + this.withCode)
  }
  

    payer(formula : Formula): void {


    if(!formula.id){
      return;
    }

    this.moneticoService.initierPaiement(formula.id).subscribe((data: any) => {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://p.monetico-services.com/test/paiement.cgi';

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = data[key];
          form.appendChild(input);
        }
      }

      document.body.appendChild(form);
      form.submit(); // redirection automatique vers Monetico
    });
  }
}
