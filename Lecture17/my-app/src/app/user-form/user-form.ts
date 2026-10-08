import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  public username = '';
  public city = 'Tbilisi';
  public phone = 0;

  public changeCity() {
    this.city = 'Batumi';
  }

  public onSubmit(userForm: NgForm): void {
    console.log(userForm);
    console.log(userForm.value);
    console.log(userForm.valid);
  }
}
