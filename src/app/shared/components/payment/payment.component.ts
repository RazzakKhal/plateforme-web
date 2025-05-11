import { Component, Input } from '@angular/core';
import { MoneticoService } from '../../services/monetico.service';
import { Formula } from '../../interfaces/formula.interface';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private moneticoService: MoneticoService) {}

  @Input() formulaa : Formula | undefined;

  payer(): void {


    if(!this.formulaa?.id){
      return;
    }

    this.moneticoService.initierPaiement(this.formulaa.id).subscribe((data: any) => {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://p.monetico-services.com/test/paiement.cgi';

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = data[key];
          form.appendChild(input);
        }
      }

      document.body.appendChild(form);
      form.submit(); // redirection automatique vers Monetico
    });
  }
}
