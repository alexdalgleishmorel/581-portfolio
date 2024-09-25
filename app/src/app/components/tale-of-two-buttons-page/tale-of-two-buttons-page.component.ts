import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-tale-of-two-buttons-page',
  standalone: true,
  imports: [],
  templateUrl: './tale-of-two-buttons-page.component.html',
  styleUrl: './tale-of-two-buttons-page.component.scss'
})
export class TaleOfTwoButtonsPageComponent {
  constructor(private dataService: DataService) {
    this.dataService.currentPageUrlName = 'tale-of-two-buttons';
  }
}
