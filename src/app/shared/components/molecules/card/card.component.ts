import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() isEditable = true;
  @Input() isDeletable = true;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
