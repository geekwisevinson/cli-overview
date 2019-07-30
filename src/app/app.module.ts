import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { DashComponent } from './features/dash.component';
import { AlerterDirective } from './directives/alerter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    AlerterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
