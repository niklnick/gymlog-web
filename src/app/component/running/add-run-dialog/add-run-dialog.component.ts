import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-run-dialog',
  templateUrl: './add-run-dialog.component.html',
  styleUrls: ['./add-run-dialog.component.scss']
})
export class AddRunDialogComponent {
  datetime: Date | null = null;
  distance: number | null = null;
  duration: number | null = null;

  constructor(private dialogRef: MatDialogRef<AddRunDialogComponent>) { }

  closeAddRunDialog(): void {
    this.dialogRef.close([this.datetime, this.distance, this.duration]);
  }
}
