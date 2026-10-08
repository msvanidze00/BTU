import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { UserFormR } from './user-form-r/user-form-r';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserForm, UserFormR],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
}
