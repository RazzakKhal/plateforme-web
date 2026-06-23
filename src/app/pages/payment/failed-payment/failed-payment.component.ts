import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-failed-payment',
  standalone: false,
  templateUrl: './failed-payment.component.html',
  styleUrl: './failed-payment.component.css'
})
export class FailedPaymentComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly status$ = this.activatedRoute.queryParamMap.pipe(
    map((params) => (params.get('status') ?? 'FAILED').toUpperCase())
  );
}
