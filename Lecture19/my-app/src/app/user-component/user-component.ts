import { Component, inject, OnInit } from '@angular/core';
import { EmailService } from '../services/email-service';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent implements OnInit {
  emailService = inject(EmailService);

  public ngOnInit(): void {
    this.emailService.sendEmail('mariam', 'hello');
  }
}
