import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

@Component({
  selector: 'app-sitout-peda',
  templateUrl: './sitout-peda.component.html',
  styleUrls: ['./sitout-peda.component.scss']
})
export class SitoutPedaComponent implements OnInit {
  
  public chartType: string = 'pie';
  public chartDatasets: Array<any>=[];
  public chartLabels: Array<any>=[];
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#46BFBD', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  public data: any;
  public totalMatches: number = 24;
  public isChecked: boolean = true;

  constructor(public dialog: MatDialog) {
    
    
  }

  ngOnInit(): void {
    this.initialise();
  }

  
  private initialise(): void {
    this.chartLabels = ['Annan', 'Rashi', 'Appunni'];
    this.data = [{
      id: 1,
      Name: 'Annan',
      Wins: 3,
      Losses: 18,
      DNP: 3
    },
    {
      id: 2,
      Name: 'Rashi',
      Wins: 8,
      Losses: 16,
      DNP: 0
    },
    {
      id: 3,
      Name: 'Appunni',
      Wins: 13,
      Losses: 11,
      DNP: 0
    }];
    this.setSuccessData();
  }

  public setSuccessData(): void {
    let winAPlayer;
    let winBPlayer;
    let winCPlayer;
    this.isChecked = true;
    this.chartDatasets = [];

    winAPlayer = (this.data[0].Wins / (this.totalMatches - this.data[0].DNP)) * 100;
    winAPlayer = +winAPlayer.toFixed(2);
    this.chartDatasets.push(winAPlayer);
    winBPlayer = (this.data[1].Wins / (this.totalMatches - this.data[1].DNP)) * 100;
    winBPlayer = +winBPlayer.toFixed(2);
    this.chartDatasets.push(winBPlayer);
    winCPlayer = (this.data[2].Wins / (this.totalMatches - this.data[2].DNP)) * 100;
    winCPlayer = +winCPlayer.toFixed(2);
    this.chartDatasets.push(winCPlayer);

  }

  public setFailureData(): void {
    let winAPlayer;
    let winBPlayer;
    let winCPlayer;
    this.chartDatasets = [];
    this.isChecked = false;

    winAPlayer = (this.data[0].Losses / (this.totalMatches - this.data[0].DNP)) * 100;
    winAPlayer = +winAPlayer.toFixed(2);
    this.chartDatasets.push(winAPlayer);
    winBPlayer = (this.data[1].Losses / (this.totalMatches - this.data[1].DNP)) * 100;
    winBPlayer = +winBPlayer.toFixed(2);
    this.chartDatasets.push(winBPlayer);
    winCPlayer = (this.data[2].Losses / (this.totalMatches - this.data[2].DNP)) * 100;
    winCPlayer = +winCPlayer.toFixed(2);
    this.chartDatasets.push(winCPlayer);
  }

  public openDialog(name:string): void {
    var getId:number;
    this.data.forEach((value:any)=>{
      if(value.Name == name){
        getId = value.id;
        this.dialog.open(DetailsPopupComponent, {
          data: {
            id: getId
          }
        });
      }
    })
    
  }

}
