import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class PaymentFacadeService {


  private readonly store = inject(Store);

  
}
