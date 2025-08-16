import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from '../../../shared/services/auth.service';
import { ForgotFormComponent } from './forgot-form/forgot-form.component';
import { DesignSystemModule } from '../../../shared/components/design-system.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  const authSpy = jasmine.createSpyObj('AuthService', ['forgotPassword', 'resetPassword']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent, ForgotFormComponent],
      imports: [DesignSystemModule,RouterTestingModule, ReactiveFormsModule],          // pas besoin de HttpClientTestingModule ici
      providers: [
        { provide: AuthService, useValue: authSpy },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
