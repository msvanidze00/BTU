import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-component',
  imports: [ChildComponent, FormsModule],
  templateUrl: './new-component.html',
  styleUrl: './new-component.scss',
})
export class NewComponent {
  public myValue = 'Helloooooo';
  public count = 0;
  public name = 'Mariami';
  public counter = signal(0);

  public doSmth() {
    console.log('user started typing');
  }
  public increment() {
    this.count++;
  }

  public takeEvent(event: { data: boolean }) {
    console.log('from child', event);
  }

  
}
