import { TestBed } from '@angular/core/testing';

import { ResetPasswordDomainService } from './reset-password-domain.service';

describe('ResetPasswordDomainService', () => {
  let service: ResetPasswordDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
