import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter-service';
import { EmailService } from '../services/email-service';

@Component({
  selector: 'app-box-component',
  imports: [],
  providers: [{
    provide: EmailService, useFactory: () => {
      const email = inject(EmailService)
      const isProducton = true;

      
    }
  }],
  templateUrl: './box-component.html',
  styleUrl: './box-component.scss',
})
export class BoxComponent {
  counter = inject(CounterService);

  
}
