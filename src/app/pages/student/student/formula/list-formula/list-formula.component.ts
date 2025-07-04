import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Formula } from '../../../../../shared/interfaces/formula.interface';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from '../../../../../shared/components/payment/payment.component';
import { SplitArrayOfStringPipe } from '../../../../../shared/pipes/split-array-of-string.pipe';


@Component({
  selector: 'app-list-formula',
  imports: [CommonModule, PaymentComponent, SplitArrayOfStringPipe],
  templateUrl: './list-formula.component.html',
  styleUrl: './list-formula.component.css'
})
export class ListFormulaComponent {


    @Input() formula : Formula | undefined;
    @Input() allFormulas : Formula[] | undefined;
    @Input() withCode = false;

    @Output() changeCode = new EventEmitter<void>()

    public toggleCode(){
      this.changeCode.emit()
    }


}
