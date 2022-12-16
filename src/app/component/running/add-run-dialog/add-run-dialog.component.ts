import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Run } from 'src/app/data/run';
import { RunService } from 'src/app/service/run.service';

@Component({
  selector: 'app-add-run-dialog',
  templateUrl: './add-run-dialog.component.html',
  styleUrls: ['./add-run-dialog.component.scss']
})
export class AddRunDialogComponent {
  datetime: string = '';
  distance!: number;
  duration!: string;

  constructor(private runService: RunService, private dialogRef: MatDialogRef<AddRunDialogComponent>, @Inject(MAT_DIALOG_DATA) private runs: Run[]) {
    this.datetime = formatDate(Date.now(), 'yyyy-MM-ddTHH:mm', 'en-US');
  }

  onCancelAddRunDialog(): void {
    this.dialogRef.close();
  }

  durationToNumber(durationStr: string): number {
    let durationStrs = durationStr.split(':');
    let durationNum = 0;
    for (let i = 0; i < durationStrs.length; i++) durationNum += +durationStrs[i] * (Math.pow(60, 2 - i));
    return durationNum;
  }

  onSubmitAddRunDialog(): void {
    const run: Run = { datetime: new Date(this.datetime), distance: this.distance, duration: this.durationToNumber(this.duration) };
    this.runService.addRun(run).subscribe(run => this.runs.push(run));
    this.dialogRef.close(run);
  }
}
