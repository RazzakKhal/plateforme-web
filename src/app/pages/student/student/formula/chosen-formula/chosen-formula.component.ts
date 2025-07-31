import { Component, Input } from '@angular/core';
import { Formula } from '../../../../../shared/interfaces/formula.interface';
import { SplitArrayOfStringPipe } from '../../../../../shared/pipes/split-array-of-string.pipe';

@Component({
  selector: 'app-chosen-formula',
  imports: [SplitArrayOfStringPipe],
  templateUrl: './chosen-formula.component.html',
  styleUrl: './chosen-formula.component.css'
})
export class ChosenFormulaComponent {
  @Input() formula : Formula | undefined;

}
