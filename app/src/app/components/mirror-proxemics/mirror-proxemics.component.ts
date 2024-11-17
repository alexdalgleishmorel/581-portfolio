import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { DataService } from '../../service/data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-mirror-proxemics-page',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './mirror-proxemics-page.component.html',
  styleUrl: './mirror-proxemics-page.component.scss'
})
export class MirrorProxemicsPageComponent {
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
