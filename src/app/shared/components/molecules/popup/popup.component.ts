import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  @Input() title!: string;
  @Input() saveButtonText = 'Enregistrer';
  @Input() cancelButtonText = 'Fermer';
  @Input() deleteAction = false;

  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter();

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.save.emit();
  }
}
