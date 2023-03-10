import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunningComponent } from './component/running/running.component';
import { RunService } from './service/run.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DurationPipe } from './pipe/duration.pipe';
import { PacePipe } from './pipe/pace.pipe';
import { AddRunDialogComponent } from './component/running/add-run-dialog/add-run-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RunningComponent,
    DashboardComponent,
    DurationPipe,
    PacePipe,
    AddRunDialogComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
