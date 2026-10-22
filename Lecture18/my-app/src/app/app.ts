import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Timer } from './timer/timer';
import {
  debounceTime,
  filter,
  from,
  interval,
  map,
  mergeMap,
  of,
  Subject,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Timer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = signal('Angular 17');
  http = inject(HttpClient);

  subject = new Subject<string>();
  // search = new FormControl('');
  // searchText = signal('');
  // userId = new FormControl('');
  // user = signal<User | null>(null);
  // show = signal(true);

  ngOnInit(): void {
    this.subject.subscribe((v) => console.log('A', v));
    this.subject.subscribe((v) => console.log('B', v));

    this.subject.next('hello');
    this.subject.next('WORLD');
    // this.userId.valueChanges
    //   .pipe(
    //     debounceTime(500),
    //     filter((id) => id !== ''),
    //     mergeMap((id) => this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)),
    //   )
    //   .subscribe((user) => this.user.set(user ));
    // this.search.valueChanges.subscribe((t) => {
    //   console.log('search', t);
    //   this.searchText.set(t ?? '');
    // });
    // const promise = new Promise<string>((resolve) => {
    //   console.log('Promise start');
    //   resolve('first');
    //   resolve('second');
    // });
    // const observable = new Observable<string>((observer) => {
    //   console.log('observable start');
    //   observer.next('first');
    //   observer.next('second');
    // });
    // promise.then((value) => console.log('promise', value));
    // observable.subscribe((value) => console.log('observable', value));
    // const numberObservable = new Observable<number>((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.complete();
    //   observer.next(5);
    // });
    // numberObservable.subscribe((v) => console.log(v));
    // const obs1 = of([1, 2, 3, 4], [5, 6, 7, 7]);
    // const obs2 = from([1, 2, 3, 4]);
    // obs1.subscribe((v) => console.log('of => ', v));
    // obs2.subscribe((v) => console.log('from => ', v));
    // const staticObservable = of(1, 2, 3, 4);
    // staticObservable.subscribe({
    //   next: (value) => console.log(value),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('conplete'),
    // });
    // from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    //   .pipe(
    //     take(5),
    //     filter((n) => n % 2 === 0),
    //     tap((n) => console.log(n)),
    //     map((n) => n * 2),
    //   )
    //   .subscribe((v) => console.log(v));
  }
}
