import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PToggleInputComponent } from './p-toggle-input.component';

describe('PToggleInputComponent', () => {
  let component: PToggleInputComponent;
  let fixture: ComponentFixture<PToggleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PToggleInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PToggleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
