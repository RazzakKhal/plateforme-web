import { TestBed } from '@angular/core/testing';

import { MoneticoService } from './monetico.service';
import { provideHttpClient } from '@angular/common/http';

describe('MoneticoService', () => {
  let service: MoneticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()] 
    });
    service = TestBed.inject(MoneticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
