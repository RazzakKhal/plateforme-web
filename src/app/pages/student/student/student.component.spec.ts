import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(undefined),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
