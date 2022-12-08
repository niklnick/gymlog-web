import { Component, OnInit } from '@angular/core';
import { Run } from 'src/app/data/run';
import { RunService } from 'src/app/service/run.service';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements OnInit {
  runs: Run[] = [];
  displayedColumns = ['datetime', 'distance', 'duration', 'pace'];

  constructor(private runService: RunService) { }

  getRuns(): void {
    this.runService.getRuns().subscribe(
      runs => {
        this.runs = runs;
        console.log(runs);
      }
    );
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
