import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Card } from './features/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // protected readonly title = signal('my-app');
  // public userRole = 'editor';
  // public status = 'error'

  // public users = [
  //   {
  //     name: 'mariam',
  //     age: '27',
  //   },
  //   {
  //     name: 'mzia',
  //     age: '35',
  //   },
  //   {

  //     name: 'nino',
  //     age: '40',
  //   },
  // ];

  public title = 'card title';
  public description = 'this is description';
  public content = 'Car Card';
  public price = 25;

  public cardData = [
    {
      title: 'card title',
      description: 'this is description',
      content: 'car card',
      price: 25,
    },
    {
      title: 'first title',
      description: 'this is description',
      content: 'car card',
      price: 25,
    },
    {
      title: 'second title',
      description: 'this is description',
      content: 'car card',
      price: 25,
    },
    {
      title: 'third title',
      description: 'this is description',
      content: 'car card',
      price: 133,
    },
    {
      title: 'firth title',
      description: 'this is description',
      content: 'car card',
      price: 24,
    },
    {
      title: 'fifth title',
      description: 'this is description',
      content: 'car card',
      price: 33,
    },
    {
      title: 'sisxth title',
      description: 'this is description',
      content: 'car card',
      price: 12,
    },
    {
      title: 'seventh title',
      description: 'this is description',
      content: 'car card',
      price: 80,
    },
  ];
}
