import { TestBed } from '@angular/core/testing';

import { FormulaFacadeService } from './formula-facade.service';

describe('FormulaFacadeService', () => {
  let service: FormulaFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
