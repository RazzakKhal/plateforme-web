import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoneticoService } from '../../../../../shared/services/monetico.service';
import { Formula } from '../models/formula.model';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  constructor(private moneticoService: MoneticoService) {}

  @Input() formulaa: Formula | undefined;
  @Output() choosenFormula = new EventEmitter<Formula>();

  chooseFormula() {
    this.choosenFormula.emit(this.formulaa);
  }
}
