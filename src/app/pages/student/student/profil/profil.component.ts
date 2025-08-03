import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../../shared/interfaces/user.interface';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';

@Component({
  selector: 'app-profil',
  standalone: false,
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  constructor(private readonly router : Router, private readonly localStorageService: LocalStorageService){}

  @Input() user: UserInterface | null | undefined

  onDisconnect(){
    this.localStorageService.clearToken()
    this.router.navigate(['/sign-in'])
  }
}
