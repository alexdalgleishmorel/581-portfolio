import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DataService, Page } from '../../service/data.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public pageNames: Page[];
  public pageSelectFormControl = new FormControl();

  constructor(private dataService: DataService, private router: Router) {
    this.pageNames = this.dataService.pages;
    this.pageSelectFormControl.setValue(null);
    this.pageSelectFormControl.valueChanges.subscribe(value => {
      this.dataService.currentPageUrlName = value;
      this.router.navigate([value]);
    });
  }
}
