import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMe } from '../../../store/users/selectors/me.selector';
import { GlobalState } from '../../../store/global-state.interface';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
  standalone: false
})
export class MeComponent implements OnInit{

  constructor(private store: Store<GlobalState>){}

  ngOnInit(): void {
    this.store.select(getMe).subscribe((me) => console.log('moi', me))
  }

}
