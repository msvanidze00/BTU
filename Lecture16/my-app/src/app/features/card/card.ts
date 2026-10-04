import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  public cardTitle = input<string>('');
  public cardDescription = input<string>('');
  public cardContent = input<string>('');
  public cardPrice = input<number>(0);
}
