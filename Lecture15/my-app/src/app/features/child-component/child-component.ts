import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [NgClass, NgStyle, UpperCasePipe,],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
  public childInputName = input<string>(''); //calmxrivi
  public username = 'mariami';
  public value = model<number>(0); //ormxrivi
  public formSubmitted = output<{ data: boolean }>();
  public isActive = signal(true);

  public toggle() {
    this.isActive.update(v => !v)
  }

  public increment() {
    this.value.update((v) => v + 1);
  }

  public decrement() {
    this.value.update((v) => v - 1);
  }

  public formSubmit() {
    this.formSubmitted.emit({ data: true });
  }
}
