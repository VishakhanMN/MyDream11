import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie' as ChartType;

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
