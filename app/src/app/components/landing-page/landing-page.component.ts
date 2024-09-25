import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DataService, Project } from '../../service/data.service';
import { ProjectSlideComponent } from "../project-slide/project-slide.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ProjectSlideComponent,
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public projectIndex: number = 0;

  constructor(private dataService: DataService, private router: Router) {}

  getDisplayedProject(): Project {
    return this.dataService.projects[this.projectIndex];
  }

  decrementProjectIndex() {
    if (this.projectIndex > 0) {
      this.projectIndex -= 1;
    }
  }

  canIncrement() {
    return this.projectIndex < this.dataService.projects.length-1;
  }

  incrementProjectIndex() {
    if (this.projectIndex < this.dataService.projects.length-1) {
      this.projectIndex += 1;
    }
  }
}
