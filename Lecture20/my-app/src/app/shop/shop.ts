import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
  private router = inject(Router);

  sortDesc() {
    this.router.navigate(['/products'], { queryParams: { sort: 'desc' } });
  }
}
