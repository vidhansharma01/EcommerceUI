import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'My First Angular app';
  imageUrl: string = 'https://picsum.photos/seed/picsum/200/300';
  count: number = 0;
  username: string = '';
  isLoggedIn: boolean = true;

  active: string = 'active';

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
