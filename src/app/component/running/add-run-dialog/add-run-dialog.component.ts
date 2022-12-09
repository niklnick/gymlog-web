import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-run-dialog',
  templateUrl: './add-run-dialog.component.html',
  styleUrls: ['./add-run-dialog.component.scss']
})
export class AddRunDialogComponent {
  datetime: String = formatDate(Date.now(), 'yyyy-MM-ddTHH:mm', 'en-US');
  distance: number | null = null;
  duration: number | null = null;

  constructor(private dialogRef: MatDialogRef<AddRunDialogComponent>) { }

  onSubmitRun(): void {
    this.dialogRef.close({
      'datetime': this.datetime,
      'distance': this.distance,
      'duration': this.duration
    });
  }
}
