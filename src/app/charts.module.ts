import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { Chart1Component } from './components/charts/chart1/chart1.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { DynamicChartComponent } from './components/charts/dynamic-chart/dynamic-chart.component';


@NgModule({
  declarations: [
    Chart1Component,
    LineChartComponent,
    RadarChartComponent,
    DynamicChartComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    Chart1Component,
    LineChartComponent,
    RadarChartComponent,
    DynamicChartComponent,
  ]
})
export class ChartsModule { }