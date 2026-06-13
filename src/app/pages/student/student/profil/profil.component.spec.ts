import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfilComponent } from './profil.component';
import { DesignSystemModule } from '../../../../shared/components/design-system.module';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';
import { UserInterface } from '../../../../shared/interfaces/user.interface';
import { MeFacadeService } from '../../../../store/users/facade/me-facade.service';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;
  let meFacade: jasmine.SpyObj<MeFacadeService>;
  let errorSubject: BehaviorSubject<any>;
  let isUpdatingSubject: BehaviorSubject<boolean>;

  const user: UserInterface = {
    id: 'user-id',
    firstname: 'Jean',
    lastname: 'Dupont',
    mail: 'jean.dupont@example.com',
    phone: '0601020304',
    roles: ['ROLE_USER'],
    address: {
      addressLine1: '1 rue des Lilas',
      city: 'Paris',
      postalCode: '75001',
      country: 'FR',
    },
  };

  beforeEach(async () => {
    errorSubject = new BehaviorSubject<any>(undefined);
    isUpdatingSubject = new BehaviorSubject<boolean>(false);
    meFacade = jasmine.createSpyObj<MeFacadeService>(
      'MeFacadeService',
      ['updateMe', 'clearError'],
      {
        error$: errorSubject.asObservable(),
        isUpdating$: isUpdatingSubject.asObservable(),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ProfilComponent],
      imports: [DesignSystemModule, ReactiveFormsModule],
      providers: [
        provideRouter([]),
        LocalStorageService,
        {
          provide: MeFacadeService,
          useValue: meFacade,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user address', () => {
    const textContent = fixture.nativeElement.textContent;

    expect(textContent).toContain('1 rue des Lilas');
    expect(textContent).toContain('75001 Paris');
    expect(textContent).toContain('FR');
  });

  it('should open the edit modal on click', () => {
    const editButton = fixture.debugElement
      .queryAll(By.css('button'))
      .find((button) =>
        button.nativeElement.textContent.includes('Modifier mes informations')
      );

    editButton?.nativeElement.click();
    fixture.detectChanges();

    expect(component.isEditModalOpen).toBeTrue();
  });

  it('should prefill the form with the current user', () => {
    component.openEditModal();

    expect(component.profileForm.get('firstname')?.value).toBe('Jean');
    expect(component.profileForm.get('lastname')?.value).toBe('Dupont');
    expect(component.profileForm.get('phone')?.value).toBe('0601020304');
    expect(component.profileForm.get('addressLine1')?.value).toBe(
      '1 rue des Lilas'
    );
    expect(component.profileForm.get('city')?.value).toBe('Paris');
    expect(component.profileForm.get('postalCode')?.value).toBe('75001');
    expect(component.profileForm.get('country')?.value).toBe('FR');
  });

  it('should not send the update when the form is invalid', () => {
    component.openEditModal();
    component.profileForm.patchValue({ firstname: '' });

    component.saveProfile();

    expect(meFacade.updateMe).not.toHaveBeenCalled();
  });

  it('should dispatch the update and close the modal on success', () => {
    meFacade.updateMe.and.callFake(() => {
      isUpdatingSubject.next(true);
      errorSubject.next(undefined);
      isUpdatingSubject.next(false);
    });
    component.openEditModal();
    component.profileForm.patchValue({
      firstname: 'Jeanne',
      lastname: 'Durand',
      phone: '0708091011',
      addressLine1: '10 avenue Victor Hugo',
      city: 'Lyon',
      postalCode: '69000',
    });

    component.saveProfile();

    expect(meFacade.updateMe).toHaveBeenCalledWith({
      firstname: 'Jeanne',
      lastname: 'Durand',
      phone: '0708091011',
      address: {
        addressLine1: '10 avenue Victor Hugo',
        city: 'Lyon',
        postalCode: '69000',
        country: 'FR',
      },
    });
    expect(component.isEditModalOpen).toBeFalse();
  });

  it('should keep the modal open and show an error on failure', () => {
    meFacade.updateMe.and.callFake(() => {
      isUpdatingSubject.next(true);
      errorSubject.next(new Error('update failed'));
      isUpdatingSubject.next(false);
    });
    component.openEditModal();

    component.saveProfile();
    fixture.detectChanges();

    expect(component.isEditModalOpen).toBeTrue();
    expect(component.saveError).toContain('La mise a jour');
  });
});
