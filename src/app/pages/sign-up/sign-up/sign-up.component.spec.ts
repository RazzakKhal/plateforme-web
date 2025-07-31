import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { PInputComponent } from '../../../shared/components/atoms/p-input/p-input.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent, SignUpFormComponent, PInputComponent],
      imports : [RouterTestingModule, ReactiveFormsModule],
      providers: [
        provideMockStore({
          initialState: {} // tu peux mettre un faux état ici si besoin
        })

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

