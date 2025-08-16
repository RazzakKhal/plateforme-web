import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ResetFormComponent } from './reset-form/reset-form.component';
import { DesignSystemModule } from '../../../shared/components/design-system.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent, ResetFormComponent],
      imports: [RouterTestingModule, DesignSystemModule,ReactiveFormsModule],
      providers: [
        provideMockStore({
          initialState: {} // tu peux mettre un faux état ici si besoin
        })

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
