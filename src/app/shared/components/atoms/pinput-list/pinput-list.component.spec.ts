import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PInputListComponent } from './pinput-list.component';

describe('PInputListComponent', () => {
  let component: PInputListComponent;
  let fixture: ComponentFixture<PInputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PInputListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
