import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { addUser } from './store/users/actions/users.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

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
   this.store.select((state) => state).subscribe((state) => {console.log('state', state)})
  }

  testDispatch(){
    this.store.dispatch(addUser({user: 'razzak'}))
  }

  title = 'web';
}
