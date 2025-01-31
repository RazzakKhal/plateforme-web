import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getUsers } from './store/users/selector/users.selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  state! : Observable<any>;

  constructor(private store: Store){}

  ngOnInit(): void {
  }

  title = 'web';
}
