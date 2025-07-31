import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Formula } from '../../../../../shared/interfaces/formula.interface';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from '../payment/payment.component';
import { SplitArrayOfStringPipe } from '../../../../../shared/pipes/split-array-of-string.pipe';


@Component({
  selector: 'app-list-formula',
  imports: [CommonModule, PaymentComponent, SplitArrayOfStringPipe],
  templateUrl: './list-formula.component.html',
  styleUrl: './list-formula.component.css'
})
export class ListFormulaComponent {


    @Input() allFormulas : Formula[] | undefined;
    @Input() withCode = false;

    @Output() choosenFormula = new EventEmitter<Formula>()

  

    public chooseFormula(formula : Formula){
      this.choosenFormula.emit(formula)
    }

}
