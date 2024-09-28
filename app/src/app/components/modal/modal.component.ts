import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  public imageUrl: string;
  public imageTitle: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string, imageTitle: string }, private dialogRef: MatDialog) {
    this.imageUrl = this.data.imageUrl;
    this.imageTitle = this.data.imageTitle;
  }

  closeModal() {
    this.dialogRef.closeAll();
  }
}
