import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoneticoService } from '../../../../../shared/services/monetico.service';
import { Formula } from '../../../../../shared/interfaces/formula.interface';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private moneticoService: MoneticoService) {}

  @Input() formulaa : Formula | undefined;
  @Output() choosenFormula = new EventEmitter<Formula>()

  chooseFormula(){
    console.log('emission 1')
    this.choosenFormula.emit(this.formulaa)
  }


}
