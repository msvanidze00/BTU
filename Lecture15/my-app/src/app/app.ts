import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './features/new-component/new-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // protected readonly title = signal('my title');
}
