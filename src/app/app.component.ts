import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { LocalStorageService } from './shared/services/local-storage.service';
import { getMe } from './store/users/actions/get-me.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule, HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  state! : Observable<any>;

  constructor(private store: Store, private localStorageService : LocalStorageService){}

  ngOnInit(): void {
    const token = this.localStorageService.getToken();
  if (token) {
    this.store.dispatch(getMe());
  }
  }

  title = 'web';
}
