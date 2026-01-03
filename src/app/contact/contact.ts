import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../services/post.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  providers: [PostService],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  price: number = 10.5;
  user: any = { name: 'Vidhan', age: 25, skills: ['Angular', 'TypeScript', 'JavaScript'] };

  post$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.post$ = this.postService.getPosts().pipe(map(post => post.filter(p => p.id === 5)));
  }
}
