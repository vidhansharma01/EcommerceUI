import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  aboutId: string | null = null;
  selectedPerson: any = null;
  
  about = [
    { id: 1, name: 'Vidhan' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Ankit' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.aboutId = params.get('id');
      const id = parseInt(this.aboutId || '0');
      this.selectedPerson = this.about.find(person => person.id === id);
      console.log('About ID:', this.aboutId);
    });

    this.route.queryParamMap.subscribe(params => {
      const ref = params.get('q');
      console.log('Query Param: q =', ref);
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
