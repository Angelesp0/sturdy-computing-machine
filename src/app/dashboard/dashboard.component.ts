import { Component, OnInit, ViewChild  } from '@angular/core';
import * as Chartist from 'chartist';
import { AdminService } from '../_services/admin/admin.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public contratosTotales: any;
  public data1: any;
  public data2: any;
  public data3: any;


  public num: number;
  data: any;

  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  // Grafica central
  public lineBigDashboardChartType = 'line';
  public lineBigDashboardChartData: ChartDataSets[] = [
    {
      label: 'Contratos',
      pointBorderWidth: 1,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      fill: true,
      borderWidth: 2,
      data: [1, 4, 7, 5, 1, 6, 2, 5, 7, 8, 4, 2]
    }
  ];
  public lineBigDashboardChartOptions: ChartOptions = {

    layout: {
        padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
        }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: '#fff',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest'
    },
    legend: {
        position: 'bottom',
        fillStyle: '#FFF',
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: 'rgba(255,255,255,0.4)',
                fontStyle: 'bold',
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10
            },
            gridLines: {
                drawTicks: true,
                drawBorder: false,
                display: true,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent'
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: 'transparent',
                display: false,

            },
            ticks: {
                padding: 10,
                fontColor: 'rgba(255,255,255,0.4)',
                fontStyle: 'bold'
            }
        }]
    }
  };
  public lineBigDashboardChartLabels: Array<any> = ['ENERO', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  public lineBigDashboardChartColors: Array<any>;
  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  // grafica inferior izquierda
  public lineChartType;
  public lineChartData: Array<any>;
  public lineChartOptions: any;
  public lineChartLabels: Array<any>;
  public lineChartColors: Array<any>;

  // grafica inferior central
  public lineChartWithNumbersAndGridType = 'line';
  public lineChartWithNumbersAndGridData: ChartDataSets[] = [
    {
      label: 'Email Stats',
       pointBorderWidth: 2,
       pointHoverRadius: 4,
       pointHoverBorderWidth: 1,
       pointRadius: 4,
       fill: true,
       borderWidth: 2,
      data: [40, 500, 650, 700, 1200, 1250, 1300, 1900, 1900, 1900, 1900, 1900]
    }
  ];
  public lineChartWithNumbersAndGridOptions: any;
  public lineChartWithNumbersAndGridLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public lineChartWithNumbersAndGridColors: Array<any>;

  // grafica inferior derecha
  public lineChartGradientsNumbersType = 'bar';
  public lineChartGradientsNumbersData: Array<any>  = [
    {
      label: 'Active Countries',
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      fill: true,
      borderWidth: 1,
      data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
    }
  ];
  public lineChartGradientsNumbersOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [{
        gridLines: {
          zeroLineColor: 'transparent',
          drawBorder: false
        }
      }],
      xAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
};
  public lineChartGradientsNumbersLabels: Array<any> = ['January', 'November', 'December'];
  public lineChartGradientsNumbersColors: Array<any>;

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }
    public chartHovered(e: any): void {
      console.log(e);
    }
    public hexToRGB(hex, alpha) {
      let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
      } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
    }

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.chartColor = '#FFFFFF';
    this.canvas = document.getElementById('bigDashboardChart');
    this.ctx = this.canvas.getContext('2d');
    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);
    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');
    this.lineBigDashboardChartColors = [
       {
         backgroundColor: this.gradientFill,
         borderColor: this.chartColor,
         pointBorderColor: this.chartColor,
         pointBackgroundColor: '#2c2c2c',
         pointHoverBackgroundColor: '#2c2c2c',
         pointHoverBorderColor: this.chartColor,
       }
    ];
    this.adminService.getContracts().subscribe(response => {
      const ene = [];
      const feb = [];
      const mar = [];
      const abr = [];
      const may = [];
      const jun = [];
      const jul = [];
      const ago = [];
      const sep = [];
      const oct = [];
      const nov = [];
      const dic = [];
      this.data1 = response;
      for (let i = 0; i < this.data1.length; i++) {
        const date = new Date(this.data1[i]['upload_date']);
        const month = date.getMonth() + 1;
        switch (month) {
          case 1:
            ene.push('1');
            break;
          case 2:
            feb.push('2');
            break;
          case 3:
            mar.push('3');
            break;
          case 4:
            abr.push('4');
            break;
          case 5:
            may.push('5');
            break;
          case 6:
            jun.push('6');
            break;
          case 7:
            jul.push('7');
            break;
          case 8:
            ago.push('8');
            break;
          case 9:
            sep.push('9');
            break;
          case 10:
            oct.push('10');
            break;
          case 11:
            nov.push('11');
            break;
          case 12:
            dic.push('12');
            break;
          default:
            break;
        }
      }
      this.lineBigDashboardChartData = [
        {
          label: 'Contratos',
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: [ene.length, feb.length, mar.length, abr.length, may.length, jun.length, jul.length, ago.length, sep.length, oct.length, nov.length, dic.length]
        }
      ];
    });
    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };
    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.canvas = document.getElementById('lineChartExample');
    this.ctx = this.canvas.getContext('2d');
    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);
    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');
    this.lineChartData = [
        {
          label: 'Active Users',
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
    ];
    this.lineChartColors = [
       {
         borderColor: '#f96332',
         pointBorderColor: '#FFF',
         pointBackgroundColor: '#f96332',
         backgroundColor: this.gradientFill
       }
    ];
    this.lineChartType = 'line';
    this.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.lineChartOptions = this.gradientChartOptionsConfiguration;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.canvas = document.getElementById('lineChartExampleWithNumbersAndGrid');
    this.ctx = this.canvas.getContext('2d');
    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);
    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
    this.adminService.getSales().subscribe(response => {
      let ene = [];
      let feb = [];
      let mar = [];
      let abr = [];
      let may = [];
      let jun = [];
      let jul = [];
      let ago = [];
      let sep = [];
      let oct = [];
      let nov = [];
      let dic = [];
      this.data2 = response;
      console.log(this.data2[7]['value']);
      for (let i = 0; i < this.data2.length; i++) {
        const date = new Date(this.data2[i]['update_time']);
        const month = date.getMonth() + 1;
        switch (month) {
          case 1:
            ene.push(this.data2[i]['value']);
            break;
          case 2:
            feb.push(this.data2[i]['value']);
            break;
          case 3:
            mar.push(this.data2[i]['value']);
            break;
          case 4:
            abr.push(this.data2[i]['value']);
            break;
          case 5:
            may.push(this.data2[i]['value']);
            break;
          case 6:
            jun.push(this.data2[i]['value']);
            break;
          case 7:
            jul.push(this.data2[i]['value']);
            break;
          case 8:
            ago.push(this.data2[i]['value']);
            break;
          case 9:
            sep.push(this.data2[i]['value']);
            break;
          case 10:
            oct.push(this.data2[i]['value']);
            break;
          case 11:
            nov.push(this.data2[i]['value']);
            break;
          case 12:
            dic.push(this.data2[i]['value']);
            break;
          default:
            break;
        }
      }

      let m1 = ene.reduce((a, b) => a + b, 0);
      let m2 = feb.reduce((a, b) => a + b, 0);
      let m3 = mar.reduce((a, b) => a + b, 0);
      let m4 = abr.reduce((a, b) => a + b, 0);
      let m5 = may.reduce((a, b) => a + b, 0);
      let m6 = jun.reduce((a, b) => a + b, 0);
      let m7 = jul.reduce((a, b) => a + b, 0);
      let m8 = ago.reduce((a, b) => a + b, 0);
      let m9 = sep.reduce((a, b) => a + b, 0);
      let m10 = oct.reduce((a, b) => a + b, 0);
      let m11 = nov.reduce((a, b) => a + b, 0);
      let m12 = dic.reduce((a, b) => a + b, 0);


      this.lineChartWithNumbersAndGridData = [
        {
          label: 'Total',
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12]
        }
      ];
    });
    this.lineChartWithNumbersAndGridColors = [
       {
         borderColor: '#18ce0f',
         pointBorderColor: '#FFF',
         pointBackgroundColor: '#18ce0f',
         backgroundColor: this.gradientFill
       }
    ];
    this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.canvas = document.getElementById('barChartSimpleGradientsNumbers');
    this.ctx = this.canvas.getContext('2d');
    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));
    this.adminService.getExecutive().subscribe(response => {
      this.data3 = response;
      for (let i = 0; i < this.data3.length; i++) {
        const name = this.data3[i]['first_name'] + this.data3[i]['last_name'];
        console.log(name);
      }
    });
    /*this.lineChartGradientsNumbersData = [
        {
          label: "Active Countries",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
        }
    ];*/
    this.lineChartGradientsNumbersColors = [
     {
       backgroundColor: this.gradientFill,
       borderColor: '#2CA8FF',
       pointBorderColor: '#FFF',
       pointBackgroundColor: '#2CA8FF',
     }
    ];
    // this.lineChartGradientsNumbersLabels = ['January', 'November', 'December'];
  }


}
