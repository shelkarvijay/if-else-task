import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion'
import * as Gauge from 'fusioncharts/fusioncharts.widgets';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion, Gauge)
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatDialogModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
