import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenFormulaComponent } from './chosen-formula.component';

describe('ChosenFormulaComponent', () => {
  let component: ChosenFormulaComponent;
  let fixture: ComponentFixture<ChosenFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChosenFormulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
