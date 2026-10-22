import { Component, inject, signal, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user-component/user-component';
import { BoxComponent } from './box-component/box-component';
import { CounterService } from './services/counter-service';
import { Box2Component } from './box2-component/box2-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, BoxComponent, Box2Component],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  counter = inject(CounterService)
}
