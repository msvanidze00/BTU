import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  id = Math.floor(Math.random() * 1000);
}
