import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  displayChoice: 'FORMULA' | 'USER' = 'FORMULA';
  formulas = [1, 2, 3];
}
