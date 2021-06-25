import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [45.7,54.3], label: 'Variation Chart' }
  ];

  public chartLabels: Array<any> = ['Win %', 'Lose %'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#00c851','#ff3547' ],
      hoverBackgroundColor: ['#00c851','#ff3547'],
      borderWidth: 3,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  

  public navigateToChild(value: string): any {
    switch (value) {
      case 'myInfo': {
        this.router.navigate(['/myDashboard']);
        break;
      }
      case 'sitoutPeda': {
        this.router.navigate(['/sitoutPeda']);
        break;
      }
    }
  }

}
