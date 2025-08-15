import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { filter, Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/organisms/header/header.component';
import { LocalStorageService } from './shared/services/local-storage.service';
import { getMeAction } from './store/users/actions/get-me.action';
import { DesignSystemModule } from './shared/components/design-system.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule, RouterModule, DesignSystemModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ASK Plateforme';
  state!: Observable<any>;
  isHeaderVisible = true;

  constructor(private store: Store, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.hideHeader()
    const token = this.localStorageService.getToken();
    if (token) {
      this.store.dispatch(getMeAction());
    }
  }

  /**
   * check if the header need to be hidden
   */
  hideHeader() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe((event: NavigationEnd) => {
        const hiddenRoutes = ['/sign-in', '/sign-up', '/forgot-password', '/reset-password'];
        this.isHeaderVisible = !hiddenRoutes.some(route => event.urlAfterRedirects.startsWith(route));
      });
  }

}
