import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { LaborService } from './services/labor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LaborService],
  bootstrap: [AppComponent]
})
export class AppModule { }
