import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './admin.routes';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [PanelComponent],
  providers: [],
  exports: [],
})
export class AdminModule {}
