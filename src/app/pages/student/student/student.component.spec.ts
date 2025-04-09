import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { HttpClient, HttpHandler, provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../../shared/services/auth.service';
import { ActionsSubject, provideStore, ReducerManager, StateObservable, Store } from '@ngrx/store';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [provideHttpClient(), AuthService, provideStore({})] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
