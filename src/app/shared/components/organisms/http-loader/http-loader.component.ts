import { Component } from '@angular/core';
import { HttpLoaderService } from '../../../services/http-loader.service';

@Component({
  selector: 'app-http-loader',
  standalone: true,
  templateUrl: './http-loader.component.html',
  styleUrl: './http-loader.component.css',
})
export class HttpLoaderComponent {
  protected readonly isHttpLoading;

  constructor(httpLoaderService: HttpLoaderService) {
    this.isHttpLoading = httpLoaderService.isLoading;
  }
}
