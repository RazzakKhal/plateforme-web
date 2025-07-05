import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignUpFormComponent } from './sign-up-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFormComponent],
      imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;

        // ✅ Simule un FormGroup avant detectChanges()
    component.myForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      mail: new FormControl(''),
      addressLine: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl('')
    });

    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
