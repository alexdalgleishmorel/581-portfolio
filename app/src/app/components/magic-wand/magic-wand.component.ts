import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-magic-wand',
  standalone: true,
  imports: [],
  templateUrl: './magic-wand.component.html',
  styleUrl: './magic-wand.component.scss'
})
export class MagicWandComponent {
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
