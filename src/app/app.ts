import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SortNumberPipe } from './sort-number-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, SortNumberPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  title: string = 'My First Angular app';
  imageUrl: string = 'https://picsum.photos/seed/picsum/200/300';
  count: number = 0;
  username: string = '';
  isLoggedIn: boolean = true;
  price: number = 10.5;
  user: any = { name: 'Vidhan', age: 25, skills: ['Angular', 'TypeScript', 'JavaScript'] };
  num: number[] = [2,9,6,4,1];

  active: string = 'active';

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
