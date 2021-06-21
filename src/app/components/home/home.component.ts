import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
