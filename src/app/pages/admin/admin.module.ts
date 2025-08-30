import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './admin.routes';
import { PanelComponent } from './panel/panel.component';
import { DesignSystemModule } from '../../shared/components/design-system.module';
import { AsyncPipe } from '@angular/common';
import { SplitArrayOfStringPipe } from '../../shared/pipes/split-array-of-string.pipe';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    DesignSystemModule,
    AsyncPipe,
    SplitArrayOfStringPipe,
  ],
  declarations: [PanelComponent],
  providers: [],
  exports: [],
})
export class AdminModule {}
