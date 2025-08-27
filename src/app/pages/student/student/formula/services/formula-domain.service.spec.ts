import { TestBed } from '@angular/core/testing';

import { FormulaDomainService } from './formula-domain.service';

describe('FormulaDomainService', () => {
  let service: FormulaDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
