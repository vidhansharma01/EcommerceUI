import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SortNumberPipe } from '../sort-number-pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  price: number = 10.5;
  user: any = { name: 'Vidhan', age: 25, skills: ['Angular', 'TypeScript', 'JavaScript'] };
}
