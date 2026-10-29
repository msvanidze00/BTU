import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private router = inject(Router);

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToAboutByUrl() {
    this.router.navigateByUrl('/about');
  }
}
