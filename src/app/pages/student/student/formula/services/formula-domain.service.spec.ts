import { TestBed } from '@angular/core/testing';

import { FormulaDomainService } from './formula-domain.service';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

describe('FormulaDomainService', () => {
  let service: FormulaDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideStore({})],
    });
    service = TestBed.inject(FormulaDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
