import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFormComponent } from './reset-form.component';
import { DesignSystemModule } from '../../../../shared/components/design-system.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('ResetFormComponent', () => {
  let component: ResetFormComponent;
  let fixture: ComponentFixture<ResetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetFormComponent],
      imports: [ DesignSystemModule, ReactiveFormsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetFormComponent);
    component = fixture.componentInstance;

    component.myForm = new FormGroup({
      password: new FormControl(''),
      validatePassword: new FormControl('')
    });
    component.isFormSubmitted = false;

    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
