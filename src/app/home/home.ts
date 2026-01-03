import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../services/user';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
   title: string = 'My First Angular app';
  imageUrl: string = 'https://picsum.photos/seed/picsum/200/300';
  count: number = 0;
  username: string = '';
  isLoggedIn: boolean = true;
  price: number = 10.5;
  user: any = { name: 'Vidhan', age: 25, skills: ['Angular', 'TypeScript', 'JavaScript'] };
  num: number[] = [2,9,6,4,1];

  active: string = 'active';

  constructor(private userservice: User) {}

  
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getUsers(){
    this.userservice.getUsers().subscribe(data => {
      console.log(data);
    });
  }
}
