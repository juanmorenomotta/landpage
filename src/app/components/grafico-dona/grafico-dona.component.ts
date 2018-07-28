import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // parametros de entrada con valores Default
  @Input() ChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() ChartData: number[] = [350, 450, 100];
  @Input() ChartType: string = 'doughnut';
  @Input() ChartLegend: string = 'Leyenda';

  // Doughnut
  // public doughnutChartLabels: string[] = this.ChartLabels;
  // public doughnutChartData: number[] = this.ChartData;
  // public doughnutChartType: string = this.ChartType;
  // public doughnutChartLegend: string = this.ChartLegend;


  constructor() {

   }

  ngOnInit() {

  }

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
}
