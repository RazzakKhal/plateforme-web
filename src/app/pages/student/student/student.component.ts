import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { getMe } from '../../../store/users/selectors/me.selector';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { GlobalState } from '../../../store/global-state.interface';
import { ProfilComponent } from './profil/profil.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  standalone:false,
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit{

  user$!: Observable<UserInterface | undefined>;

  constructor(private store:Store<GlobalState>){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
   this.user$ = this.store.select(getMe)
  }

}
