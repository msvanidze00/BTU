import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noAdminValidator } from '../customValidator.validators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-form-r',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form-r.html',
  styleUrl: './user-form-r.scss',
})
export class UserFormR implements OnInit {
  public userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      noAdminValidator(),
    ]),
    city: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl<number | null>(null, Validators.required),
  });

  public ngOnInit() {
    this.userForm.controls.username.valueChanges.subscribe((e) => {
      console.log(e);
    });
  }

  public onSubmit(): void {
    console.log(this.userForm.controls.username.errors);
  }

  public changeCity(): void {
    this.userForm.controls.city.setValue('Tbilisi');
  }
}
