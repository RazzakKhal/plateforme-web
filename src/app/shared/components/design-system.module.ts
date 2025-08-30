import { NgModule } from '@angular/core';
import { HeaderComponent } from './organisms/header/header.component';
import { PInputComponent } from './atoms/p-input/p-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PNotificationComponent } from './molecules/pnotification/pnotification.component';
import { CardComponent } from './molecules/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PInputComponent,
    PNotificationComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    PInputComponent,
    PNotificationComponent,
    CardComponent,
  ],
})
export class DesignSystemModule {}
