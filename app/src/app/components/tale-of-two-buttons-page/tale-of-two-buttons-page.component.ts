import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { DataService } from '../../service/data.service';
import { ModalComponent } from '../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tale-of-two-buttons-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './tale-of-two-buttons-page.component.html',
  styleUrl: './tale-of-two-buttons-page.component.scss'
})
export class TaleOfTwoButtonsPageComponent {
  constructor(private dataService: DataService, private dialog: MatDialog, private router: Router) {}

  openImageDialog(imageUrl: string, imageTitle: string) {
    this.dialog.open(ModalComponent, {
      data: {
        imageUrl: imageUrl,
        imageTitle: imageTitle
      }
    })
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
