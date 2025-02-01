import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MeComponent } from './me.component';
import { Store } from '@ngrx/store';
import { MeState } from '../../../store/users/reducer/users.reducer';

describe('MeComponent', () => {
  let component: MeComponent;
  let fixture: ComponentFixture<MeComponent>;
  let store: MockStore<{ meState: MeState }>;

  const initialState = {
    meState: {
      user: { id: 1, name: 'John Doe', email: 'john@example.com' },
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeComponent],
      imports: [],
      providers: [        
        provideMockStore({ initialState }) 
      ]
    })
    .compileComponents();

    store = TestBed.inject(Store) as MockStore<{ meState: MeState }>;
    fixture = TestBed.createComponent(MeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
