import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Run } from '../data/run';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(`${this.apiServerUrl}/run/all`);    
  }

  public addRun(run: Run): Observable<Run> {
    return this.http.post<Run>(`${this.apiServerUrl}/run/add`, run);
  }

  public update(run: Run): Observable<Run> {
    return this.http.put<Run>(`${this.apiServerUrl}/run/update`, run);
  }

  public delete(runId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/run/delete/${runId}`);
  }
}
