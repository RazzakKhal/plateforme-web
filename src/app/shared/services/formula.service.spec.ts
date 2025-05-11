import { TestBed } from '@angular/core/testing';

import { FormulaService } from './formula.service';
import { provideHttpClient } from '@angular/common/http';

describe('FormulaService', () => {
  let service: FormulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()] 
    });
    service = TestBed.inject(FormulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
