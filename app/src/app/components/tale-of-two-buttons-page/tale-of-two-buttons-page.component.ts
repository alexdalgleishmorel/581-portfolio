import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { DataService } from '../../service/data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tale-of-two-buttons-page',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './tale-of-two-buttons-page.component.html',
  styleUrl: './tale-of-two-buttons-page.component.scss'
})
export class TaleOfTwoButtonsPageComponent {
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  openImageDialog(imageUrl: string, imageTitle: string) {
    this.dialog.open(ModalComponent, {
      data: {
        imageUrl: imageUrl,
        imageTitle: imageTitle
      }
    })
  }
}
