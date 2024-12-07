import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';
import { DataService } from '../../service/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magic-wand',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './magic-wand.component.html',
  styleUrl: './magic-wand.component.scss'
})
export class MagicWandComponent {
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
