import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedPaymentComponent } from './failed-payment.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FailedPaymentComponent', () => {
  let component: FailedPaymentComponent;
  let fixture: ComponentFixture<FailedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FailedPaymentComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
