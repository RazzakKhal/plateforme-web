import {
  Component,
  DestroyRef,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserInterface } from '../../../../shared/interfaces/user.interface';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';
import { UserRequestInterface } from '../../../../shared/interfaces/user-request.interface';
import { MeFacadeService } from '../../../../store/users/facade/me-facade.service';

@Component({
  selector: 'app-profil',
  standalone: false,
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css',
})
export class ProfilComponent implements OnChanges {
  @Input() user: UserInterface | null | undefined;
  private readonly destroyRef = inject(DestroyRef);

  readonly profileForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    country: new FormControl('FR', [Validators.required]),
  });

  isEditModalOpen = false;
  isFormSubmitted = false;
  isSaving = false;
  saveError?: string;
  private hasPendingSave = false;

  constructor(
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
    private readonly meFacade: MeFacadeService
  ) {
    combineLatest([this.meFacade.error$, this.meFacade.isUpdating$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([error, isUpdating]) => {
        this.isSaving = Boolean(isUpdating);

        if (error && this.hasPendingSave) {
          this.saveError =
            'La mise a jour de vos informations a echoue. Veuillez reessayer.';
          return;
        }

        if (
          this.hasPendingSave &&
          !isUpdating &&
          !error &&
          this.isEditModalOpen
        ) {
          this.hasPendingSave = false;
          this.closeEditModal();
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.patchFormFromUser();
    }
  }

  openEditModal() {
    if (!this.user) {
      return;
    }

    this.meFacade.clearError();
    this.patchFormFromUser();
    this.isFormSubmitted = false;
    this.saveError = undefined;
    this.hasPendingSave = false;
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.meFacade.clearError();
    this.patchFormFromUser();
    this.isFormSubmitted = false;
    this.saveError = undefined;
    this.hasPendingSave = false;
    this.isEditModalOpen = false;
  }

  saveProfile() {
    this.isFormSubmitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    this.saveError = undefined;
    this.hasPendingSave = true;

    const payload: UserRequestInterface = {
      firstname: this.profileForm.get('firstname')?.value ?? '',
      lastname: this.profileForm.get('lastname')?.value ?? '',
      phone: this.profileForm.get('phone')?.value ?? '',
      address: {
        addressLine1: this.profileForm.get('addressLine1')?.value ?? '',
        city: this.profileForm.get('city')?.value ?? '',
        postalCode: this.profileForm.get('postalCode')?.value ?? '',
        country: 'FR',
      },
    };

    this.meFacade.updateMe(payload);
  }

  onDisconnect() {
    this.localStorageService.clearToken();
    this.router.navigate(['/sign-in']);
  }

  private patchFormFromUser() {
    this.profileForm.patchValue({
      firstname: this.user?.firstname ?? '',
      lastname: this.user?.lastname ?? '',
      phone: this.user?.phone ?? '',
      addressLine1: this.user?.address?.addressLine1 ?? '',
      city: this.user?.address?.city ?? '',
      postalCode: this.user?.address?.postalCode ?? '',
      country: this.user?.address?.country ?? 'FR',
    });
  }
}
