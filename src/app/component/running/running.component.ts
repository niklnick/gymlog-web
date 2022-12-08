import { Component, OnInit } from '@angular/core';
import { Run } from 'src/app/data/run';
import { RunService } from 'src/app/service/run.service';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements OnInit {
  public runs: Run[] | undefined;

  constructor(private runService: RunService) { }

  public getRuns(): void {
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
}
