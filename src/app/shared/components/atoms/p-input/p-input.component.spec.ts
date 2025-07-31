import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PInputComponent } from './p-input.component';

describe('PInputComponent', () => {
  let component: PInputComponent;
  let fixture: ComponentFixture<PInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PInputComponent], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(PInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
