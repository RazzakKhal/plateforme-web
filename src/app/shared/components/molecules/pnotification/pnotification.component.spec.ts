import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNotificationComponent } from './pnotification.component';

describe('PNotificationComponent', () => {
  let component: PNotificationComponent;
  let fixture: ComponentFixture<PNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
