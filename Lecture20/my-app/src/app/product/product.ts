import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {
  private route = inject(ActivatedRoute);
  public category = '';
  public product = '';
  public id: string | null = null;

  ngOnInit(): void {
    this.category = this.route.snapshot.data['category'];
    // this.id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
}
