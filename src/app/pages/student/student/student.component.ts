import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { getMe } from '../../../store/users/selector/me.selector';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { GlobalState } from '../../../store/global-state.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  standalone: false,
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{

  user$!: Observable<UserInterface | undefined>;

  constructor(private authService: AuthService, private store:Store<GlobalState>){}

  ngOnInit(): void {
    this.authService.getMe().subscribe((user) => console.log(user)) 
    this.getUser();
  }

  getUser(){
   this.user$ = this.store.select(getMe)
  }

}
