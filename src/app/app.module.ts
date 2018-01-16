import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DutiesComponent } from './components/duties/duties.component';
import { DutyComponent } from './components/duty/duty.component';
import { DutyService } from './services/duty.service';


@NgModule({
  declarations: [
    AppComponent,
    DutiesComponent,
    DutyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DutyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
