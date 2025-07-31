
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { PInputComponent } from '../../../shared/components/atoms/p-input/p-input.component';
import { provideMockStore } from '@ngrx/store/testing';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { RouterTestingModule } from '@angular/router/testing'; // ✅ à importer
import { provideRouter, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent, SignInFormComponent,PInputComponent],
      imports : [RouterTestingModule, ReactiveFormsModule],
      providers: [
        provideMockStore({
          initialState: {} // tu peux mettre un faux état ici si besoin
        })

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



