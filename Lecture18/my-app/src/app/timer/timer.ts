import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [AsyncPipe],
  providers: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer {
  // private subscription!: Subscription;



  // ngOnInit(): void {
  //   // this.subscription = interval(1000).subscribe((v) => console.log(v));
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  //   console.log('unsubscribe');
  // }
}
