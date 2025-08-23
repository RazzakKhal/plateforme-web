import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-notification',
  standalone: false,
  templateUrl: './pnotification.component.html',
  styleUrl: './pnotification.component.css',
})
export class PNotificationComponent {
  @Input() status!: Status;
}

type Status = 'warning' | 'error' | 'success';
