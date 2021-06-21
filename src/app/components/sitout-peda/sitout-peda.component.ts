import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

@Component({
  selector: 'app-sitout-peda',
  templateUrl: './sitout-peda.component.html',
  styleUrls: ['./sitout-peda.component.scss']
})
export class SitoutPedaComponent implements OnInit {

  public pieChartOptions: ChartOptions = {};
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: ['yellow', 'green', 'black'],
      borderColor: 'black',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];
  public data: any;
  public totalMatches: number = 24;
  public isChecked: boolean = true;

  constructor(public dialog: MatDialog) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    
  }

  ngOnInit(): void {
    this.initialise();
  }

  
  private initialise(): void {
    this.pieChartLabels = ['Annan', 'Rashi', 'Appunni'];
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
    this.pieChartData = [];
    this.pieChartOptions = {
      title: {
        text: 'Win %',
        display: true,
        fontColor: 'red',
        fontSize: 20
      },
      responsive: true,
    }

    winAPlayer = (this.data[0].Wins / (this.totalMatches - this.data[0].DNP)) * 100;
    winAPlayer = +winAPlayer.toFixed(2);
    this.pieChartData.push(winAPlayer);
    winBPlayer = (this.data[1].Wins / (this.totalMatches - this.data[1].DNP)) * 100;
    winBPlayer = +winBPlayer.toFixed(2);
    this.pieChartData.push(winBPlayer);
    winCPlayer = (this.data[2].Wins / (this.totalMatches - this.data[2].DNP)) * 100;
    winCPlayer = +winCPlayer.toFixed(2);
    this.pieChartData.push(winCPlayer);

  }

  public setFailureData(): void {
    let winAPlayer;
    let winBPlayer;
    let winCPlayer;
    this.pieChartData = [];
    this.isChecked = false;
    this.pieChartOptions = {
      title: {
        text: 'Loss %',
        display: true,
        fontColor: 'red',
        fontSize: 20
      },
      responsive: true,
    }

    winAPlayer = (this.data[0].Losses / (this.totalMatches - this.data[0].DNP)) * 100;
    winAPlayer = +winAPlayer.toFixed(2);
    this.pieChartData.push(winAPlayer);
    winBPlayer = (this.data[1].Losses / (this.totalMatches - this.data[1].DNP)) * 100;
    winBPlayer = +winBPlayer.toFixed(2);
    this.pieChartData.push(winBPlayer);
    winCPlayer = (this.data[2].Losses / (this.totalMatches - this.data[2].DNP)) * 100;
    winCPlayer = +winCPlayer.toFixed(2);
    this.pieChartData.push(winCPlayer);
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
