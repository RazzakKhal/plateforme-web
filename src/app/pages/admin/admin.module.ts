import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './admin.routes';
import { PanelComponent } from './panel/panel.component';
import { DesignSystemModule } from '../../shared/components/design-system.module';

@NgModule({
  imports: [RouterModule.forChild(ROUTES), DesignSystemModule],
  declarations: [PanelComponent],
  providers: [],
  exports: [],
})
export class AdminModule {}
