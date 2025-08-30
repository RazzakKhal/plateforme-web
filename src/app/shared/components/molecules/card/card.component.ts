import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() description: string[] | undefined;
  @Input() title: string | undefined;
  @Input() item1: string | undefined;
  @Input() item2: string | undefined;
}
