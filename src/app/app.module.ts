import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunningComponent } from './component/running/running.component';
import { RunService } from './service/run.service';

@NgModule({
  declarations: [
    AppComponent,
    RunningComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
