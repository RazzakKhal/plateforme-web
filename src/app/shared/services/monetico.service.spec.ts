import { TestBed } from '@angular/core/testing';

import { MoneticoService } from './monetico.service';

describe('MoneticoService', () => {
  let service: MoneticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
