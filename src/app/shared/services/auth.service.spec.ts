import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { UserRequestInterface } from '../interfaces/user-request.interface';
import { DISABLE_HTTP_LOADER } from '../interceptors/disable-http-loader.token';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update the connected user profile', () => {
    const payload: UserRequestInterface = {
      firstname: 'Jean',
      lastname: 'Dupont',
      phone: '0601020304',
      address: {
        addressLine1: '1 rue des Lilas',
        city: 'Paris',
        postalCode: '75001',
        country: 'FR',
      },
    };

    service.updateMe(payload).subscribe();

    const request = httpTestingController.expectOne(
      `${environment.userBaseUri}/${environment.userService}/users/me`
    );

    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(payload);

    request.flush({});
  });

  it('should disable the global loader for getMe', () => {
    service.getMe().subscribe();

    const request = httpTestingController.expectOne(
      `${environment.userBaseUri}/${environment.userService}/users/me`
    );

    expect(request.request.method).toBe('GET');
    expect(request.request.context.get(DISABLE_HTTP_LOADER)).toBeTrue();

    request.flush({});
  });
});
