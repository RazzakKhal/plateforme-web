import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelComponent],
      providers: [
        provideMockStore({
          initialState: {}, // tu peux mettre un faux état ici si besoin
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
