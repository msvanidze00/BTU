import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PRODUCTS } from '../data/products-data';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  products = PRODUCTS;
  sort: string | null = null;

  openProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

  ngOnInit(): void {
    this.sort = this.route.snapshot.queryParamMap.get('sort');

    if (this.sort === 'asc') {
      this.products = [...PRODUCTS].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (this.sort === 'desc') {
      this.products = [...PRODUCTS].sort((a, b) => b.name.localeCompare(a.name));
    }
  }
}
