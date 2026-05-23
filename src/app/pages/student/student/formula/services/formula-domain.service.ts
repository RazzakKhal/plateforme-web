import { inject, Injectable } from '@angular/core';
import { MoneticoService } from '../../../../../shared/services/monetico.service';
import { Formula } from '../models/formula.model';
import { environment } from '../../../../../../environments/environment';
import { PaymentFormDto } from '../../../../../shared/interfaces/payment-form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormulaDomainService {
  private readonly moneticoService = inject(MoneticoService);

  payer(formula: Formula): void {
    if (!formula.id) {
      return;
    }

    this.moneticoService
      .initierPaiement(formula.id)
      .subscribe((data: PaymentFormDto) => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = environment.moneticoUri;

        for (const [key, value] of Object.entries(data)) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
        }

        document.body.appendChild(form);
        form.submit(); // redirection automatique vers Monetico
      });
  }
}
