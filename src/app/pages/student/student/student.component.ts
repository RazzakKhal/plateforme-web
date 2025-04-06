import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  standalone: false,
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getMe().subscribe((user) => console.log(user)) 
  }

}
