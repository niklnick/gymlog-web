import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Run } from 'src/app/data/run';
import { RunService } from 'src/app/service/run.service';
import { AddRunDialogComponent } from './add-run-dialog/add-run-dialog.component';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements OnInit {
  runs: Run[] = [];
  displayedColumns = ['datetime', 'distance', 'duration', 'pace'];

  constructor(private runService: RunService, private dialog: MatDialog) { }

  getRuns(): void {
    this.runService.getRuns().subscribe(
      runs => {
        this.runs = runs;
        console.log(runs);
      }
    );
  }

  openAddRunDialog(): void {
    const dialogRef = this.dialog.open(AddRunDialogComponent);

    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  ngOnInit(): void {
    this.getRuns();
  }

  getTotalDistance(): number {
    let totalDistance = 0;
    this.runs.forEach(run => totalDistance += run.distance);
    return totalDistance;
  }

  getTotalDuration(): number {
    let totalDuration = 0;
    this.runs.forEach(run => totalDuration += run.duration);
    return totalDuration;
  }

  getAveragePace(): number {
    let averagePace = 0;
    this.runs.forEach(run => averagePace += run.pace);
    return averagePace / this.runs.length;
  }
}
