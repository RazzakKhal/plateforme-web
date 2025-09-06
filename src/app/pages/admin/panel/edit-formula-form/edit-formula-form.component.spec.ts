import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormulaFormComponent } from './edit-formula-form.component';

describe('EditFormulaFormComponent', () => {
  let component: EditFormulaFormComponent;
  let fixture: ComponentFixture<EditFormulaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormulaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormulaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
