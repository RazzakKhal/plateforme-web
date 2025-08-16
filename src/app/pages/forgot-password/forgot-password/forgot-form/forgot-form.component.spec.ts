import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotFormComponent } from './forgot-form.component';
import { DesignSystemModule } from '../../../../shared/components/design-system.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('ForgotFormComponent', () => {
  let component: ForgotFormComponent;
  let fixture: ComponentFixture<ForgotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotFormComponent],
      imports: [ReactiveFormsModule, DesignSystemModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotFormComponent);
    component = fixture.componentInstance;

    component.myForm = new FormGroup({
      mail: new FormControl(''),
    });
    component.isFormSubmitted = false;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
