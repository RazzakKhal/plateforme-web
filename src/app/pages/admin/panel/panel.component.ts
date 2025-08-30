import { Component, inject, OnInit } from '@angular/core';
import { AdminFacadeService } from '../facade/admin-facade.service';

@Component({
  selector: 'app-panel',
  standalone: false,
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent implements OnInit {
  private readonly facade = inject(AdminFacadeService);

  displayChoice: 'FORMULA' | 'USER' = 'FORMULA';
  allFormulas$ = this.facade.formulas$;

  ngOnInit(): void {
    this.facade.getAllFormulas();
  }
}
