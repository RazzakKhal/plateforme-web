import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormulaFormComponent } from './edit-formula-form.component';
import { PInputComponent } from '../../../../shared/components/atoms/p-input/p-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PInputListComponent } from '../../../../shared/components/atoms/pinput-list/pinput-list.component';
import { PToggleInputComponent } from '../../../../shared/components/atoms/ptoggle-input/p-toggle-input.component';
import { DesignSystemModule } from '../../../../shared/components/design-system.module';

describe('EditFormulaFormComponent', () => {
  let component: EditFormulaFormComponent;
  let fixture: ComponentFixture<EditFormulaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFormulaFormComponent],
      imports: [ReactiveFormsModule, DesignSystemModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormulaFormComponent);
    component = fixture.componentInstance;
    component.formulaForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl([]),
      price: new FormControl('', [Validators.required]),
      promotionnalPrice: new FormControl(''),
      code: new FormControl(true, [Validators.required]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
