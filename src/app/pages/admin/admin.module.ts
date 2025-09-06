import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './admin.routes';
import { PanelComponent } from './panel/panel.component';
import { DesignSystemModule } from '../../shared/components/design-system.module';
import { AsyncPipe } from '@angular/common';
import { SplitArrayOfStringPipe } from '../../shared/pipes/split-array-of-string.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { EditFormulaFormComponent } from './panel/edit-formula-form/edit-formula-form.component';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    DesignSystemModule,
    AsyncPipe,
    SplitArrayOfStringPipe,
    ReactiveFormsModule,
  ],
  declarations: [PanelComponent, EditFormulaFormComponent],
  providers: [],
  exports: [],
})
export class AdminModule {}
