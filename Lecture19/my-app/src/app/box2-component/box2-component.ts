import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter-service';

@Component({
  selector: 'app-box2-component',
  imports: [],
  templateUrl: './box2-component.html',
  styleUrl: './box2-component.scss',
})
export class Box2Component {
  counter = inject(CounterService);
}
