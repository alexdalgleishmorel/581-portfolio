import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { DataService } from '../../service/data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-smart-door-page',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './smart-door.component.html',
  styleUrl: './smart-door.component.scss'
})
export class SmartDoorPageComponent {
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
