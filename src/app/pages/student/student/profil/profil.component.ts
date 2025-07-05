import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-profil',
  standalone: false,
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  @Input() user: UserInterface | null | undefined
}
