import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../../service/data.service';

@Component({
  selector: 'app-project-slide',
  standalone: true,
  imports: [],
  templateUrl: './project-slide.component.html',
  styleUrl: './project-slide.component.scss'
})
export class ProjectSlideComponent {
  @Input() project: Project = {
    displayName: '',
    urlName: '',
    displayPhotoName: ''
  };

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
